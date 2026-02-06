        if ('serviceWorker' in navigator) {
            let refreshing = false;

            // Reload page when new service worker takes control
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                if (!refreshing) {
                    console.log('[App] New service worker activated, reloading...');
                    refreshing = true;
                    window.location.reload();
                }
            });

            window.addEventListener('load', () => {
                // Fetch and display app version
                fetch('./sw.js')
                    .then(response => response.text())
                    .then(swContent => {
                        const versionMatch = swContent.match(/CACHE_VERSION = '([^']+)'/);
                        if (versionMatch) {
                            const version = versionMatch[1];
                            const versionEl = document.getElementById('app-version');
                            if (versionEl) {
                                versionEl.textContent = version;
                            }
                            // Store version for later use
                            window.appVersion = version;
                        }
                    })
                    .catch(err => console.error('[App] Failed to fetch version:', err));

                navigator.serviceWorker.register('./sw.js')
                    .then((registration) => {
                        console.log('[App] ServiceWorker registered:', registration.scope);

                        // Check for updates when user returns to the app
                        document.addEventListener('visibilitychange', () => {
                            if (!document.hidden) {
                                console.log('[App] Page visible, checking for updates...');
                                registration.update();
                            }
                        });

                        // Also check periodically (every 30 minutes) in case app stays open
                        setInterval(() => {
                            registration.update();
                        }, 1800000); // 30 minutes

                        // Listen for updates
                        registration.addEventListener('updatefound', () => {
                            const newWorker = registration.installing;
                            console.log('[App] New service worker found, installing...');

                            newWorker.addEventListener('statechange', () => {
                                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                    // New service worker available
                                    console.log('[App] New version available!');

                                    // Fetch new version number from updated service worker
                                    fetch('./sw.js?' + Date.now()) // Cache bust
                                        .then(response => response.text())
                                        .then(swContent => {
                                            const versionMatch = swContent.match(/CACHE_VERSION = '([^']+)'/);
                                            const newVersion = versionMatch ? versionMatch[1] : 'unknown';
                                            const currentVersion = window.appVersion || 'unknown';

                                            if (!window.updateToastShown) {
                                                window.updateToastShown = true;
                                                const message = `Update available: ${currentVersion} → ${newVersion}`;
                                                showUpdateToast(message, () => {
                                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                                });
                                            }
                                        })
                                        .catch(() => {
                                            if (!window.updateToastShown) {
                                                window.updateToastShown = true;
                                                showUpdateToast('A new version of SBS Tracker is available.', () => {
                                                    newWorker.postMessage({ type: 'SKIP_WAITING' });
                                                });
                                            }
                                        });
                                }
                            });
                        });
                    })
                    .catch((error) => {
                        console.error('[App] ServiceWorker registration failed:', error);
                    });
            });
        }
    
