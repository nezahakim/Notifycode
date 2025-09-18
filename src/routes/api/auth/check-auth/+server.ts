import { AUTH_SERVER } from "$lib/utils";
import { json, type RequestHandler } from "@sveltejs/kit";
import { access } from "fs";


export const POST: RequestHandler = async ({ cookies }) => {
    const token = cookies.get('nc_rt');

    if (!token) {
        return json({ authenticated: false, code:"RUYIN10" }, { status: 401 });
    }

    try {
        const res = await fetch(`${AUTH_SERVER}/api/auth/check-auth`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
            const data = await res.json();
        
            if (res.ok && data.authenticated) {
                return json({
                    authenticated: true,
                    user: data.user,
                    accessToken: data.accessToken
                });
            }
        
            return json({
                authenticated: false,
                user: null,
            });        

        
    } catch (err) { 
        return json({ authenticated: false, error: 'Server error' }, { status: 500 });
    }
};