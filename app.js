const mongoose = require('mongoose');
const Student = require('./models/student');
const uri = 'mongodb://localhost:27017/hogwarts';

mongoose
	.connect(uri)
	.then(() => {
		console.log(`Succesfully connected to ${uri}!`)
	})
	.catch((err) => {
		console.log(err.message)
	})

const createStudents = () => {
	const hermione = new Student({
		firstName: 'Hermione',
		lastName: 'Granger',
		house: 'Gryffindor', 
		courses: ['Defense Against the Dark Arts','Potions', 'Photography'],
		married: true,
		bithday: new Date('Sept 19 1973'),
		height: 65
	});
	const ron = new Student({
		firstName: 'Ron',
		lastName: 'Weasley',
		house: 'Gryffindor', 
		courses: ['Dancing','Potions', 'Photography'],
		married: true,
		bithday: new Date('Sept 21 1973'),
		height: 65
	});
	const harry = new Student({
		firstName: 'Harry',
		lastName: 'Potter',
		house: 'Gryffindor', 
		courses: ['Singing','Potions', 'Photography'],
		married: true,
		bithday: new Date('Sept 1 1983'),
		height: 65
	});

	hermione
		.save()
		.then((doc) => {
			console.log(doc);
		})
		.catch((err) => {
			console.log(err.message);
		})
	ron
		.save()
		.then((doc) => {
			console.log(doc);
		})
		.catch((err) => {
			console.log(err.message);
		})
	harry
		.save()
		.then((doc) => {
			console.log(doc);
		})
		.catch((err) => {
			console.log(err.message);
		})
};

Student.remove({}).then(createStudents);

//console.log(hermione);