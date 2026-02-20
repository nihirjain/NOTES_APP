import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./login.css";

const Login = () => {
    const navigate = useNavigate();
    const { getMe } = useAuth();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            await getMe();
            navigate("/dashboard");
        } else {
            alert("Login failed");
        }
    };

    return (
        <div className="login-container">
            <form className="login-card" onSubmit={handleSubmit}>
                <h2 className="login-title">Welcome Back</h2>

                <div className="input-group">
                    <input
                        name="email"
                        required
                        onChange={handleChange}
                    />
                    <label>Email</label>
                </div>

                <div className="input-group">
                    <input
                        name="password"
                        type="password"
                        required
                        onChange={handleChange}
                    />
                    <label>Password</label>
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;