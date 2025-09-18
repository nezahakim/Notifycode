import { json } from "@sveltejs/kit";
import type { LayoutServerLoad } from './$types';
import { AUTH_SERVER } from "$lib/utils";
import { authStore } from "$lib/stores/auth";
import { get } from "svelte/store";

export const load: LayoutServerLoad = async ({ cookies }) => {
    const refresh_token = cookies.get('nc_rt');
    const access_token = get(authStore).accessToken;

    if(!refresh_token || !access_token){
        return json({ user: null }, { status: 401 });
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
            return json({ user: data.user });
        }

        return json({ user: null, message: data.message || "Could not fetch user" }, { status: res.status });

    } catch(error){
        return json({ user: null, message:"Server Error" })
    }

};