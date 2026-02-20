import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [notes, setNotes] = useState([]);
    const [form, setForm] = useState({
        title: "",
        content: "",
    });

    // Fetch Notes
    const fetchNotes = async () => {
        try {
            const res = await fetch(
                "http://localhost:5000/api/notes/get",
                {
                    credentials: "include",
                }
            );

            const data = await res.json();
            setNotes(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    // Handle Input
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Create Note
    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch(
            "http://localhost:5000/api/notes/create",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(form),
            }
        );

        if (res.ok) {
            setForm({ title: "", content: "" });
            fetchNotes();
        }
    };

    // 🔴 Logout Function
    const handleLogout = async () => {
        try {
            await fetch(
                "http://localhost:5000/api/auth/logout",
                {
                    method: "POST",
                    credentials: "include",
                }
            );

            setUser(null);

            navigate("/", { replace: true }); // better

        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="dashboard-container">

            {/* Top Bar */}
            <div className="dashboard-header">
                <h1 className="welcome">
                    Welcome {user?.name} 👋
                </h1>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            {/* Create Note */}
            <div className="note-form-card">
                <h2>Create New Note</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        name="title"
                        placeholder="Note Title"
                        value={form.title}
                        onChange={handleChange}
                    />

                    <textarea
                        name="content"
                        placeholder="Write your note..."
                        value={form.content}
                        onChange={handleChange}
                    />

                    <button type="submit">Add Note</button>
                </form>
            </div>

            {/* Notes List */}
            <div className="notes-grid">
                {notes.length === 0 ? (
                    <p className="no-notes">
                        No notes yet. Start writing 🚀
                    </p>
                ) : (
                    notes.map((note) => (
                        <div key={note._id} className="note-card">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Dashboard;