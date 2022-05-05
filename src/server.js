const yargs = require("yargs");
const { sequelize } = require("./db/connection");
//imports for CRUD functions
const { addMovie, listMovies } = require("./movie/movieMethods");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      //add movie to database
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    } else if (yargsObj.list) {
      //list all movies
      console.log(await listMovies());
    } else if (yargsObj.update) {
      //update one movie
    } else if (yargsObj.delete) {
      //delete one movie
    } else {
      console.log("Incorrect command");
    }
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);