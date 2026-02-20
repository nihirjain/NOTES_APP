import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">

            {/* Top Navbar */}
            <div className="top-navbar">
                <button
                    className="dashboard-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Dashboard
                </button>
            </div>

            <div className="overlay">
                <div className="content">
                    <h1 className="title">Welcome to Notiva</h1>

                    <p className="description">
                        Notiva is a powerful platform designed to simplify your digital
                        experience. Secure authentication, seamless user management,
                        and modern performance — all in one place.
                    </p>

                    <div className="buttons">
                        <button
                            className="btn login-btn"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>

                        <button
                            className="btn register-btn"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;