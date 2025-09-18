import { authStore } from '$lib/stores/auth';
import type { Load } from '@sveltejs/kit';
import { get } from 'svelte/store';

export const load: Load  = async ({ fetch }) => {

    const isAuthenticated = get(authStore).isAuthenticated;
    if(isAuthenticated){
        return {
            user: get(authStore).user
        };
    }

    const res = await fetch(`/api/auth/check-auth`, {
        method: 'POST',
        credentials: 'include',
    });

    const data = await res.json();

    if (res.ok && data.authenticated) {

        authStore.login(data.user, data.accessToken)

        return {
            user: data.user
        };
    }

    return {
        user: null,
    };

};