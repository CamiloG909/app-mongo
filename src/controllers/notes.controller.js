const notesController = {};

const Note = require("../models/Note");

notesController.renderNoteForm = (req, res) => {
	console.log(req.user);
	res.render("notes/new-note");
};

notesController.createNewNote = async (req, res) => {
	const { _id } = req.user;
	const { title, description } = req.body;
	const newNote = new Note({ title, description, user: _id });
	// Two method
	// const newNote = new Note({ title, description });
	// newNote.user = req.user.id;
	await newNote.save();
	req.flash("success_msg", "Added note");
	res.redirect("/notes");
};

notesController.renderNotes = async (req, res) => {
	const notes = await Note.find({ user: req.user.id }).sort({
		createdAt: "desc",
	});
	res.render("notes/all-notes", { notes });
};

notesController.renderEditNote = async (req, res) => {
	const note = await Note.findById(req.params.id);
	if (note.user != req.user.id) {
		return res.redirect("/notes");
	}
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
