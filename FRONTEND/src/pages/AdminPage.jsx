import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AdminPage.css";

const AdminPage = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [accessDenied, setAccessDenied] = useState(false);

    useEffect(() => {
        const fetchAllNotes = async () => {
            try {
                const res = await fetch(
                    "http://localhost:5000/api/admin/notes/getAll",
                    {
                        credentials: "include",
                    }
                );

                if (res.status === 401) {
                    navigate("/login");
                    return;
                }

                if (res.status === 403) {
                    setAccessDenied(true);
                    return;
                }

                const data = await res.json();
                setNotes(data);

            } catch (err) {
                console.log(err);
            } finally {
                setDataLoading(false);
            }
        };

        fetchAllNotes();
    }, [navigate]);

    if (loading || dataLoading) return <h2>Loading...</h2>;

    if (accessDenied) {
        return (
            <div className="access-denied">
                <h2>🚫 Access Restricted</h2>
                <p>You are not authorized to view this page.</p>
                <button onClick={() => navigate("/")}>
                    Go Home
                </button>
            </div>
        );
    }

    return (
        <div className="admin-container">
            <h1>Admin Dashboard 👑</h1>
            <p>Total Notes: {notes.length}</p>

            <div className="admin-grid">
                {notes.map((note) => (
                    <div key={note._id} className="admin-card">
                        <h3>{note.title}</h3>
                        <p className="note-content">{note.content}</p>

                        <div className="note-user">
                            <strong>Id:</strong> {note.userId}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;