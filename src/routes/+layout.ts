import { AUTH_SERVER } from '$lib/utils.js';
import type { Load } from '@sveltejs/kit';


export const load: Load  = async ({ fetch }) => {
    const res = await fetch(`${AUTH_SERVER}/api/auth/check-auth`, {
        method: 'POST',
        credentials: 'include',
    });

    const data = await res.json();

    if (res.ok && data.authenticated) {
        return {
            user: data.user
        };
    }

    return {
        user: null,
        data:data
    };

};
