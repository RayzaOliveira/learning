export const signIn = () => localStorage.setItem("token", "my-token");

export const signOut = () => localStorage.removeItem("token");

export const isAuthenticated = () => !!localStorage.getItem("token");
