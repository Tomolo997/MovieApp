const search = document.querySelector('.header__input--input');
const searchBtn = document.querySelector('.btn__search');
class Movies {
  _data;
  _parentElement = document.querySelector('.container__movies__list');

  addHandlerSearch(handler) {
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();

      handler(search.value);
    });
  }

  displayMovies(data, dataImg) {
    this._data = data;
    const results = this._data.results;
    console.log(results);
    const markup = results
      .map(el => {
        return `  </div>
        <div class="card__movie">
        <img src="${dataImg.images.base_url}${dataImg.images.poster_sizes[4]}${el.poster_path}" alt="" class="card__movie__img">
        <div class="card__movie__description">
        <h2 class="card__movie--name"><span class="card__movie--span">Name</span>: ${el.title} </h2>
        <h2 class="card__movie--revenue"><span class="card__movie--span">Release date</span>: ${el.release_date} </h2>
        <h2 class="card__movie--IMDB"><span class="card__movie--span">IMDB</span>: ${el.vote_average}</h2>
      </div>
      </div>
  `;
      })
      .join();

    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  clearMovies() {
    this._parentElement.textContent = '';
  }
}

export default new Movies();
