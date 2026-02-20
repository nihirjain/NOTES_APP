
const express = require('express');
const notesRouter = express.Router();
const {userAndAdminAuth} = require('../middlewares/auth.middleware');
const {adminAuth} = require('../middlewares/admin.middleware');
const {createNote , getNotes , getAllNotes} = require('../controllers/notes.controller');

notesRouter.post('/notes/create' , userAndAdminAuth , createNote);

notesRouter.get('/notes/get' , userAndAdminAuth , getNotes);

notesRouter.get('/admin/notes/getall' , adminAuth , getAllNotes);

module.exports = notesRouter;