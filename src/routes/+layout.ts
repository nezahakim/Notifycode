import { authStore } from '$lib/stores/auth';
import type { Load } from '@sveltejs/kit';

export const load: Load  = async ({ fetch }) => {
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