import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/api/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Registration successful");
            navigate("/login");
        } else {
            alert("Registration failed");
        }
    };

    return (
        <div className="register-container">
            <form className="register-card" onSubmit={handleSubmit}>
                <h2 className="register-title">Create Account</h2>

                <div className="input-group">
                    <input
                        name="name"
                        required
                        onChange={handleChange}
                    />
                    <label>Full Name</label>
                </div>

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

                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;