const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error)
    }
}