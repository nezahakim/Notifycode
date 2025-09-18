import { AUTH_SERVER } from "$lib/utils";
import { authStore } from "$lib/stores/auth";
import { get } from "svelte/store";
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
    const access_token = get(authStore).accessToken;

    if(!access_token){
        return { user: null, message: "DUND" };
    }

    try{

        const res = await fetch(`${AUTH_SERVER}/api/acc/details`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });

        const data = await res.json();

        if(res.ok && data.user){
            
            return { user: data.user };
        }

        return { user: null, message: data.message || "Could not fetch user" };

    } catch(error){
        return { user: null, message:"Server Error" };
    }

};