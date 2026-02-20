const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
const authRouter = require('./routes/auth.routes');
const notesRouter = require('./routes/notes.routes');
dotenv.config();

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/auth' , authRouter);
app.use('/api' , notesRouter);




module.exports = app;