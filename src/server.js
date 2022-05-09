const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports for CRUD functions for movies
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");
//imports for CRUD functions for movies
const { addDirector, listDirector, deleteDirector } = require("./director/directorTable")

//setup for requiring  table connection
const Movie = require("./movie/movieTable")
const Director = require("./director/directorTable")

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      //add movie to database
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(`Added ${yargsObj.title}`)


    } else if (yargsObj.list) {
      //list all movies
      console.log(await listMovies());

    } else if (yargsObj.update) {
      //update movie
      await updateMovie ({title: yargsObj.title, actor: yargsObj.actor})


    } else if (yargsObj.delete) {
      //delete movie
      await deleteMovie ({title: yargsObj.title})
      console.log(`Deleted ${yargsObj.title}`)


    } else if (yargsObj.addDirec) {
      //add director to database
      await addDirector({director:yargsObj.director, age: yargsObj.age});

    } else if (yargsObj.listDirec) {
      //list director
      console.log(await listDirector())

    } else if (yargsObj.deleteDirec) {
      //delete director
      await deleteDirector ( {
        director: yargsObj.director,
        age: yargsObj.age
      })
    } else if (yargsObj.updateDirec) {
      //update director
      await updateMovie ({
        title: yargsObj.title,
        actor: yargsObj.actor
      })
    }
    
    //else last command
    else {
      console.log("Incorrect command");
    }


  } catch (error) {
    console.log(error);
  }
};

//relationsip setup between 2 tables : M to 1

Director.hasMany(Movie)
Movie.belongsTo(Director)


app(yargs.argv);





//node commands

//create = node src/server.js --add --title="SpiderMan" --actor="Tobey Maguire"

//list = node src/server.js --list

//update = node src/server.js --update --title="Spiderman" --actor="chris"

//destroy (delete) = node src/server.js --delete --title="SpiderMan"