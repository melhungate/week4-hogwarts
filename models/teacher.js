const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
	title: String,
	lastName: String, 
	courses: Array,
	married: Boolean,
	bithday: Date,
	students: Array
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;