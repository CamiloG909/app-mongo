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

const { isAuthenticated } = require("../helpers/auth");

// New note
router.get("/notes/add", isAuthenticated, renderNoteForm);
router.post("/notes/new", isAuthenticated, createNewNote);

// Get all notes
router.get("/notes", isAuthenticated, renderNotes);

// Edit notes
router.get("/notes/edit/:id", isAuthenticated, renderEditNote);
router.put("/notes/edit/:id", isAuthenticated, updateNote);

// Delete notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

module.exports = router;
