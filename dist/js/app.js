(() => {
  "use strict";
  const imagesBlock = document.querySelector("#imagesData");
  const API_KEY = "21ba465863fad616491916ee12f6640b";
  const LANGUAGE = "ru";
  const URL = "https://api.themoviedb.org";
  var genres = [];
  async function getAllGenres() {
    const server = `${URL}/3/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`;
    const response = await fetch(server, {
      method: "GET",
    });
    if (response.ok) {
      const responseResult = await response.json();
      genres = responseResult.genres;
    }
  }
  async function getMovies(search) {
    let server, params;
    if (search && search.length > 0) {
      server = `${URL}/3/search/movie?`;
      params = `api_key=${API_KEY}&query=${search}&language=${LANGUAGE}`;
    } else {
      server = `${URL}/3/movie/popular?`;
      params = `api_key=${API_KEY}&language=${LANGUAGE}`;
    }
    const response = await fetch(server + params, {
      method: "GET",
    });
    if (response.ok) {
      const responseResult = await response.json();
      console.log(responseResult);
      setData(responseResult);
    } else
      imagesBlock.innerHTML = `<div class="images-data-items">
                                            <span class="images-data-items__message">Ошибка при получении данных</span>
                                        </div>`;
  }
  function setData(data) {
    let html = `<div class="images-data-items">`;
    if (0 === data.results.length) {
      html += `<span class="images-data-items__message">Нету данных</span>`;
      html += "</div>";
      imagesBlock.innerHTML = html;
      return;
    }
    data.results.forEach((element) => {
      const imagePath = element.poster_path;
      const movieGenres =
        element.genre_ids && element.genre_ids.length > 0
          ? element.genre_ids?.map((_) =>
              genres.find((genre) => genre.id === _)
            )
          : [];
      html += `<article class="images-data__card card-image">
                        <div class="card-image__image">
                            ${
                              imagePath
                                ? `<img src="https://image.tmdb.org/t/p/w300${imagePath}"
                                            srcSet="https://image.tmdb.org/t/p/w500${imagePath} 2x" aria-hidden="true"
                                            itemProp="image" loading="lazy">`
                                : `<img src="../img/empty.jpg"
                                            srcSet="../img/empty.jpg 2x" aria-hidden="true"
                                            itemProp="image" loading="lazy">`
                            }
                        </div>
                        <div class="card-image__body">
                            ${
                              element.title
                                ? `<div class="card-image__title">${element.title}</div>`
                                : ""
                            }
                            ${
                              movieGenres.length > 0
                                ? `<div class="card-image__genre">Жанр: ${movieGenres
                                    .map((_) => _.name)
                                    .join(", ")}</div>`
                                : ""
                            }
                            ${
                              element.vote_count
                                ? `<div class="card-image__vote-count">Количество голосов: ${element.vote_count}</div>`
                                : ""
                            }
                            ${
                              element.vote_average
                                ? `<div class="card-image__vote-average">Средняя оценка: ${element.vote_average}</div>`
                                : ""
                            }
                            ${
                              element.overview && element.overview.length > 0
                                ? `<div class="card-image__overview">Описание: ${element.overview}</div>`
                                : ""
                            }
                        </div>
                    </article>`;
    });

    html += "</div>";
    imagesBlock.innerHTML = html;
  }
  document.addEventListener("click", documentActions);
  function documentActions(e) {
    searchButtonClick(e);
    clearButtonClick(e);
  }
  function searchButtonClick(e) {
    if (e.target.closest(".form-images-search__button")) {
      const input = document.querySelector(".input__field");
      const searchString = input.value;
      getMovies(searchString);
      e.preventDefault();
    }
  }
  function clearButtonClick(e) {
    if (e.target.closest(".input__clear")) {
      const input = document.querySelector(".input__field");
      if (input.value && input.value.length > 0) {
        input.value = "";
        getMovies("");
        input.focus();
      }
      e.preventDefault();
    }
  }
  document.addEventListener("keypress", keypressActions);
  function keypressActions(e) {
    keypressEnterSearchInput(e);
  }
  function keypressEnterSearchInput(e) {
    if (e.target.closest(".input__field") && "Enter" === e.key) {
      const input = e.target;
      const searchString = input.value;
      getMovies(searchString);
      e.preventDefault();
    }
  }
  if (imagesBlock) getAllGenres().then((_) => getMovies(""));
})();
