const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true});

// Callback function
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true},
    function (err) {
        if (err) {
            console.log(Error('Error connecting'));
        } else {
            console.log('Connection successful');
        }
    });


const movieSchema = new Schema({
        title: String,
        description: String,
        genre: String,
        actors: [{
            name: String,
            age: Number 
        }]
});
//console.log(movieSchema);

const movie = mongoose.model('Movie', movieSchema);

let movie1 = new movie({
    title: 'Bladerunner',
    description: 'A good film',
    genre: 'Sci-fi',
    actors:{
        name: 'Harrison Ford',
        age: 50,
    }
});

movie1.save().then(()=>console.log('done!'));

console.log(movie.find());

