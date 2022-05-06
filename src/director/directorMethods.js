const Director = require("../director/directorTable");


exports.addDirector = async (directorObj) => {
    try {
        await Director.create(directorObj);
    } catch (error) {
        console.log(error);
    }
}

exports.listDirector = async () => {
    try {
        return await Director.findAll();
    } catch (error) {
        console.log(error);
    }
}

exports.deleteDirector = async (condition) => {
    try {
        await Director.destroy(condition);
    } catch (error) {
        console.log(error);
    }
}