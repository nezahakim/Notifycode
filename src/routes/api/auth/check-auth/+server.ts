import { AUTH_SERVER } from "$lib/utils";
import { json, type RequestHandler } from "@sveltejs/kit";


export const GET: RequestHandler = async ({ cookies }) => {
    const token = cookies.get('nc_rt');

    if (!token) {
        return json({ authenticated: false }, { status: 200 });
    }

    try {
        const res = await fetch(`${AUTH_SERVER}/api/auth/refresh`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        if (res.ok) {
            const data = await res.json();
            const accessToken = data.accessToken;

            if (accessToken) {
                const res = await fetch(`${AUTH_SERVER}/api/auth/validate`, {
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
                    return json({ authenticated: false }, { status: 200 });
                } 
            } else {
                return json({ authenticated: false }, { status: 200 });
            } 
            
        } else {
            return json({ authenticated: false }, { status: 200 });
        } 
    } catch (err) { 
        return json({ authenticated: false, error: 'Server error' }, { status: 500 });
    }
};