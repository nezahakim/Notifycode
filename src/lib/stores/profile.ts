import { writable } from "svelte/store";

function create_profile_store() {
    const { subscribe, set, update } = writable<{profile:{ name: string; email: string, full_name: string, avatar_url: string } }| null>(null);

    return {
        subscribe,
        set_profile(profile: any) {
            update((state)=>({...state, profile: profile}))
        },
        clear_profile() {
            set(null);
        }
    };
}

export const profile_store = create_profile_store();