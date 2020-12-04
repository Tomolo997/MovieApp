//imports//
import * as model from './model.js';
import Movies from './Views/displayMovies.js';
//console log the data

const controlMovies = async function (input) {
  //dobiti dato
  try {
    const data = await model.CLTheAPI(`${input}
  `);
    console.log(data);

    const dataImg = await model.getConfig();
    console.log(dataImg);
    Movies.clearMovies();

    Movies.displayMovies(data, dataImg);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  //kda kliknemo na submit se zažene controlAPI
  Movies.addHandlerSearch(controlMovies);
};
init();
