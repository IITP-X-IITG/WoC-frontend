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
	isMentor: localStorage.getItem('isMentor') === 'true',
	isAuthenticated: localStorage.getItem('auth') === 'true',
	error: null,
	isLoading: false,
	isCheckingAuth: true,
	checkAuth: async () => {
		document.cookie.split(';').map(async cookie => {
			const [key, value] = cookie.split('=');
			if (key.trim() === 'token') {
				set({ isCheckingAuth: true, error: null });
				fetch("/api/auth", {
					method: "GET",
					headers: {
						authorization: `Bearer ${value}`
					}
				}).then(resp => {
					if (resp.ok) return resp.json();
					else throw resp;
				}).then(data => {
					console.log(data);
					localStorage.setItem("auth", true);
					localStorage.setItem("isMentor", data.type === "mentor");
					set({ 
						isAuthenticated: true, 
						isCheckingAuth: false, 
						isMentor: data.type === "mentor",
						user: {
							email: data.email,
							github: data.github,
							type: data.type
						} 
					});
				}).catch(async resp => {
					if (resp.status === 401) {
						// If the status code is 401, logout the user
						localStorage.setItem("auth", 'false');
						localStorage.removeItem("isMentor");
						document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`; // Clear token cookie
					}
					let data = await resp.json();
					if ("message" in data) {
						set({ error: data.message, isCheckingAuth: false, isAuthenticated: false });
					} else if (typeof data.error == "string") {
						set({ error: data.error, isCheckingAuth: false, isAuthenticated: false });
					} else {
						set({ error: data.error[0].msg, isCheckingAuth: false, isAuthenticated: false });
					}
				});
			}
		})
	},
	logout: async () => {
		document.cookie.split(';').map(async cookie => {
			const [key, value] = cookie.split('=');
			if (key.trim() === 'token') {
				document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
			}
		});
		set({ isLoading: true });
		localStorage.setItem("auth", false);
		localStorage.removeItem("isMentor");
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