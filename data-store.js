(function () {
    'use strict';

    const DB_NAME = 'sbs-tracker';
    const STORE_NAME = 'app';
    const KEY = 'appData';

    let dbPromise = null;

    function openDb() {
        if (!('indexedDB' in window)) {
            return Promise.resolve(null);
        }
        if (dbPromise) return dbPromise;

        dbPromise = new Promise((resolve, reject) => {
            const request = indexedDB.open(DB_NAME, 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            };

            request.onsuccess = () => resolve(request.result);
            request.onerror = () => reject(request.error);
        });

        return dbPromise;
    }

    async function withStore(mode, callback) {
        const db = await openDb();
        if (!db) return null;

        return new Promise((resolve, reject) => {
            const tx = db.transaction(STORE_NAME, mode);
            const store = tx.objectStore(STORE_NAME);
            const result = callback(store);

            tx.oncomplete = () => resolve(result);
            tx.onerror = () => reject(tx.error);
        });
    }

    async function getData() {
        try {
            return await withStore('readonly', (store) => new Promise((resolve, reject) => {
                const request = store.get(KEY);
                request.onsuccess = () => resolve(request.result || null);
                request.onerror = () => reject(request.error);
            }));
        } catch (error) {
            console.warn('[DataStore] Failed to read IndexedDB:', error);
            return null;
        }
    }

    async function setData(data) {
        try {
            await withStore('readwrite', (store) => {
                store.put(data, KEY);
            });
            return true;
        } catch (error) {
            console.warn('[DataStore] Failed to write IndexedDB:', error);
            return false;
        }
    }

    async function removeData() {
        try {
            await withStore('readwrite', (store) => {
                store.delete(KEY);
            });
            return true;
        } catch (error) {
            console.warn('[DataStore] Failed to delete IndexedDB:', error);
            return false;
        }
    }

    window.dataStore = {
        getData,
        setData,
        removeData,
        isAvailable: () => 'indexedDB' in window
    };
})();
