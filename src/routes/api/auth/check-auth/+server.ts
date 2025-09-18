import { AUTH_SERVER } from "$lib/utils";
import { json, type RequestHandler } from "@sveltejs/kit";


export const POST: RequestHandler = async ({ cookies }) => {
    const token = cookies.get('nc_rt');

    if (!token) {
        return json({ authenticated: false, code:"R10" }, { status: 401 });
    }

    try {
        const res = await fetch(`${AUTH_SERVER}/api/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
        });

        if (res.ok) {
            const data = await res.json();
            const accessToken = data.accessToken;

            if (accessToken) {
                const res = await fetch(`${AUTH_SERVER}/api/auth/validate`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });

                if (res.ok) {

                    const data = await res.json();
                    return json({ 
                        authenticated: true, 
                        user: data.user,
                        accessToken: accessToken,
                    }, { status: 200 });

                }else {
                    return json({ authenticated: false, code:"R-0" }, { status: 200 });
                } 
            } else {
                // cookies.delete('nc_rt', { path: '/' });
                return json({ authenticated: false,code:"R-1" }, { status: 200 });
            } 
            
        } else {
            const data = await res.json()
            return json({ authenticated: false, code:"R1", data:data }, { status: 200 });
        } 
    } catch (err) { 
        return json({ authenticated: false, error: 'Server error' }, { status: 500 });
    }
};