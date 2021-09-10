const { Router } = require("express");
const router = Router();

const {
	renderNoteForm,
	createNewNote,
	renderNotes,
	renderEditNote,
	updateNote,
	deleteNote,
} = require("../controllers/notes.controller");

// New note
router.get("/notes/add", renderNoteForm);
router.post("/notes/new", createNewNote);

// Get all notes
router.get("/notes", renderNotes);

// Edit notes
router.get("/notes/edit/:id", renderEditNote);
router.put("/notes/edit/:id", updateNote);

// Delete notes
router.delete("/notes/delete/:id", deleteNote);

module.exports = router;
