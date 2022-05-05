const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports for CRUD functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");

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


    } else {
      console.log("Incorrect command");
    }


  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);





//node commands

//create = node src/app.js --add --title="SpiderMan" --actor="Tobey Maguire"

//list = node src/app.js --list

//update = node src/app.js --update --title="Spiderman" --actor="chris"

//destroy (delete) = node src/app.js --delete --title="SpiderMan"