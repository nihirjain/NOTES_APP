import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const getMe = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/getme", {
                credentials: "include",
            });

            if (!res.ok) throw new Error("Not logged in");

            const data = await res.json();
            setUser(data);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getMe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, getMe, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);