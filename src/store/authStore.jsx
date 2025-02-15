import { create } from "zustand";

// interface AuthState {
// 	isAuthenticated: boolean;
// 	error: string | null;
// 	isLoading: boolean;
// 	isCheckingAuth: boolean;
// 	// signin: () => Promise<void>;
// 	// logout: () => Promise<void>;
// 	checkAuth: () => Promise<void>;
// }

export const useAuthStore = create((set) => ({
	user: null,
	isMentor: null,
	isAuthenticated: false,
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	checkAuth: async () => {
		set({ isCheckingAuth: true, error: null });
		fetch("/api/check-auth", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		}).then(resp => {
            if (resp.ok) return resp.json();
            else throw resp;
        }).then(data => {
			console.log(data);
			
			// TODO: localStorage.setItem("auth", true); // to skip initial loading... and wating to complete api/check-auth
			set({ isAuthenticated: true, isCheckingAuth: false, isMentor: data.isMentor });
        }).catch(async resp => {
            let data = await resp.json();
            if ("message" in data) {
				set({ error: data.message, isCheckingAuth: false, isAuthenticated: false });
            }else if (typeof data.error == "string") {
				set({ error: data.error, isCheckingAuth: false, isAuthenticated: false });
            } else {
				set({ error: data.error[0].msg, isCheckingAuth: false, isAuthenticated: false });
            }
        });
	},
	logout: async () => {
		set({ isLoading: true });
		// TODO: localStorage.removeItem("auth"); // to skip initial loading... and wating to complete api/check-auth
		const resp = await fetch("/api/logout", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		})
        if (!resp.ok) throw resp;
        set({ isAuthenticated: false, error: null, isLoading: false, isCheckingAuth: false });
	}
}));