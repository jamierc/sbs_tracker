(function () {
    'use strict';

    const SYNC_STORAGE_KEY = 'sbs-sync-v1';
    let supabaseClient = null;

    const defaultSyncState = {
        url: '',
        anonKey: '',
        email: '',
        status: 'Not configured',
        lastSync: null
    };

    let syncState = { ...defaultSyncState };

    function loadSyncState() {
        const saved = localStorage.getItem(SYNC_STORAGE_KEY);
        if (saved) {
            try {
                syncState = { ...syncState, ...JSON.parse(saved) };
            } catch (error) {
                console.warn('[Sync] Failed to parse sync settings:', error);
            }
        }
    }

    function saveSyncState() {
        localStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(syncState));
    }

    function getStatusEl() {
        return document.getElementById('sync-status');
    }

    function updateStatus(message) {
        syncState.status = message;
        saveSyncState();
        const statusEl = getStatusEl();
        if (statusEl) {
            statusEl.textContent = message;
        }
    }

    function updateSyncUI() {
        const urlInput = document.getElementById('sync-url');
        const keyInput = document.getElementById('sync-anon-key');
        const emailInput = document.getElementById('sync-email');
        const lastSyncEl = document.getElementById('sync-last');

        if (urlInput) urlInput.value = syncState.url || '';
        if (keyInput) keyInput.value = syncState.anonKey || '';
        if (emailInput) emailInput.value = syncState.email || '';
        if (lastSyncEl) {
            lastSyncEl.textContent = syncState.lastSync
                ? `Last sync: ${new Date(syncState.lastSync).toLocaleString()}`
                : 'Last sync: never';
        }

        updateStatus(syncState.status || 'Not configured');
    }

    function initSupabase() {
        if (!syncState.url || !syncState.anonKey) {
            supabaseClient = null;
            return null;
        }
        if (!window.supabase || !window.supabase.createClient) {
            updateStatus('Supabase library not loaded');
            return null;
        }
        supabaseClient = window.supabase.createClient(syncState.url, syncState.anonKey);
        return supabaseClient;
    }

    async function checkSession() {
        if (!supabaseClient) return null;
        const { data, error } = await supabaseClient.auth.getSession();
        if (error) {
            updateStatus(`Auth error: ${error.message}`);
            return null;
        }
        return data.session;
    }

    async function signInWithEmail() {
        if (!supabaseClient) {
            updateStatus('Supabase not configured');
            return;
        }
        const email = syncState.email;
        if (!email) {
            updateStatus('Add an email to sign in');
            return;
        }
        const { error } = await supabaseClient.auth.signInWithOtp({ email });
        if (error) {
            updateStatus(`Sign-in failed: ${error.message}`);
            return;
        }
        updateStatus('Magic link sent. Check your email.');
    }

    async function signOut() {
        if (!supabaseClient) return;
        await supabaseClient.auth.signOut();
        updateStatus('Signed out');
    }

    async function syncSettings(session) {
        const appData = window.getAppData ? window.getAppData() : null;
        if (!appData) throw new Error('App data not available');

        const payload = {
            user_id: session.user.id,
            program_type: appData.programType,
            program_variant: appData.selectedProgram,
            current_week: appData.currentWeek,
            current_day: appData.currentDay,
            one_rep_maxes: appData.oneRepMaxes || {},
            auxiliary_exercises: appData.auxiliaryExercises || {},
            plate_calculator: appData.plateCalculator || {},
            rest_timer: appData.restTimer || {},
            personal_records: appData.personalRecords || {}
        };

        const { error } = await supabaseClient
            .from('settings')
            .upsert(payload, { onConflict: 'user_id' });

        if (error) throw error;
    }

    async function syncWorkouts(session) {
        const appData = window.getAppData ? window.getAppData() : null;
        if (!appData) throw new Error('App data not available');

        const workouts = [];
        const programType = appData.programType || 'strength';
        const programVariant = appData.selectedProgram || '3x';

        Object.keys(appData.workouts || {}).forEach((week) => {
            const weekData = appData.workouts[week] || {};
            Object.keys(weekData).forEach((day) => {
                const exercises = weekData[day] || [];
                exercises.forEach((exercise) => {
                    workouts.push({
                        user_id: session.user.id,
                        program_type: programType,
                        program_variant: programVariant,
                        week: parseInt(week, 10),
                        day: parseInt(day, 10),
                        exercise_name: exercise.name,
                        payload: exercise
                    });
                });
            });
        });

        if (!workouts.length) return;

        const { error } = await supabaseClient
            .from('workouts')
            .upsert(workouts, {
                onConflict: 'user_id,program_type,program_variant,week,day,exercise_name'
            });

        if (error) throw error;
    }

    async function syncNow() {
        if (!supabaseClient) {
            updateStatus('Supabase not configured');
            return;
        }

        updateStatus('Syncing...');
        const session = await checkSession();
        if (!session) {
            updateStatus('Not signed in');
            return;
        }

        try {
            await syncSettings(session);
            await syncWorkouts(session);
            syncState.lastSync = new Date().toISOString();
            updateStatus('Sync complete');
            updateSyncUI();
        } catch (error) {
            updateStatus(`Sync failed: ${error.message || error}`);
        }
    }

    function saveConfig() {
        const urlInput = document.getElementById('sync-url');
        const keyInput = document.getElementById('sync-anon-key');
        const emailInput = document.getElementById('sync-email');

        syncState.url = urlInput?.value.trim() || '';
        syncState.anonKey = keyInput?.value.trim() || '';
        syncState.email = emailInput?.value.trim() || '';

        saveSyncState();
        initSupabase();
        updateStatus(syncState.url && syncState.anonKey ? 'Configured' : 'Not configured');
    }

    function bindEvents() {
        const saveBtn = document.getElementById('sync-save-btn');
        const signInBtn = document.getElementById('sync-signin-btn');
        const signOutBtn = document.getElementById('sync-signout-btn');
        const syncBtn = document.getElementById('sync-now-btn');

        if (saveBtn) saveBtn.onclick = saveConfig;
        if (signInBtn) signInBtn.onclick = signInWithEmail;
        if (signOutBtn) signOutBtn.onclick = signOut;
        if (syncBtn) syncBtn.onclick = syncNow;
    }

    function initSyncUI() {
        loadSyncState();
        initSupabase();
        updateSyncUI();
        bindEvents();
    }

    window.initSyncUI = initSyncUI;
})();
