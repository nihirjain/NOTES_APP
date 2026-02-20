const notesModel = require('../models/notes.model');
const createNote = async (req , res) => {
    try {
        const {title , content} = req.body;
        const id = req.decoded.id;
        console.log(id);
        const note = await notesModel.create({title , content , userId : id});
        res.status(201).json({message : 'Note created successfully' , note});

    }
    catch (error) {
        console.log(error);
        
        res.status(500).json({message : 'Server error'});
    }
};

const getNotes = async (req , res) => {
    try {
        const notes = await notesModel.find({userId : req.user._id});
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({message : 'Server error'});
    }
};



const getAllNotes = async (req , res) => {
    try {
        const notes = await notesModel
            .find();

        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({message : 'Server error'});
    }
};

module.exports = {createNote , getNotes , getAllNotes};