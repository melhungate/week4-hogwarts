const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	house: String, 
	courses: Array,
	married: Boolean,
	bithday: Date,
	height: Number
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;