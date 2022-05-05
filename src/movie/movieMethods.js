const Movie = require("./movieTable");

//add
exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
};

//list
exports.listMovies = async () => {
    try {
        return await Movie.findAll();
    } catch (error) {
        console.log(error)
    }
}

//update
exports.updateMovie = async (movieObj) => {
    try {
        await Movie.update({actor:movieObj.actor}, {
            where: {
                title: movieObj.title,
            }
        });
    } catch (error) {
        console.log(error)
    }
};


//delete
exports.deleteMovie = async(movieObj) => {
    try {
        await Movie.destroy({
            where: {
                title:movieObj.title
            }
        });
    } catch (error) {
        console.log(error)
    }
}



