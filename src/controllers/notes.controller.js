const notesController = {};

const Note = require("../models/Note");

notesController.renderNoteForm = (req, res) => {
	res.render("notes/new-note");
};

notesController.createNewNote = async (req, res) => {
	const { title, description } = req.body;
	const newNote = new Note({ title, description });
	await newNote.save();

	req.flash("success_msg", "Added note");
	res.redirect("/notes");
};

notesController.renderNotes = async (req, res) => {
	const notes = await Note.find();
	res.render("notes/all-notes", { notes });
};

notesController.renderEditNote = async (req, res) => {
	const note = await Note.findById(req.params.id);
	res.render("notes/edit-note", { note });
};

notesController.updateNote = async (req, res) => {
	const { title, description } = req.body;
	await Note.findByIdAndUpdate(req.params.id, { title, description });

	req.flash("success_msg", "Updated note");
	res.redirect("/notes");
};

notesController.deleteNote = async (req, res) => {
	await Note.findByIdAndDelete(req.params.id);

	req.flash("success_msg", "Deleted note");
	res.redirect("/notes");
};

module.exports = notesController;
