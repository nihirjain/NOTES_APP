📘 API Documentation
🌐 Base URL
http://localhost:5000/api

Authentication:

Cookie-based JWT (httpOnly)

Frontend must send credentials: include

🔐 Auth APIs
1️⃣ Register User
➜ POST /register
Request Body
{
  "name": "Nihir",
  "email": "nihir@gmail.com",
  "password": "123456"
}
Success Response
{
  "message": "User registered successfully"
}
2️⃣ Login User
➜ POST /login
Request Body
{
  "email": "nihir@gmail.com",
  "password": "123456"
}
Success Response
{
  "message": "Login successful"
}

👉 Server sets httpOnly cookie containing JWT.

📝 Notes APIs
3️⃣ Create Note
➜ POST /notes/create

🔒 Protected Route (User must be logged in)

Request Body
{
  "content": "This is my first note"
}
Success Response
{
  "message": "Note created successfully"
}
4️⃣ Get My Notes
➜ GET /notes/get

🔒 Protected Route

Success Response
[
  {
    "_id": "noteId1",
    "content": "This is my note",
    "user": "userId"
  }
]

Returns only logged-in user’s notes.

🛡 Admin API
5️⃣ Get All Notes (Admin Only)
➜ GET /admin/notes/getall

🔒 Protected Route (Admin middleware required)

Success Response
[
  {
    "_id": "noteId1",
    "content": "Note content",
    "user": {
      "_id": "userId",
      "name": "Nihir",
      "email": "nihir@gmail.com"
    }
  }
]

Returns all notes of all users.