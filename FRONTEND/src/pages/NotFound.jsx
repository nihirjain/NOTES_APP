import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <div className="notfound-card">
                <h1 className="error-code">404</h1>
                <h2>Page Not Found</h2>
                <p>
                    Oops! The page you are looking for does not exist.
                </p>

                <button
                    className="home-btn"
                    onClick={() => navigate("/")}
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFound;