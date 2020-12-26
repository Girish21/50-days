const API_URL = 'https://api.themoviedb.org/3';
const API_KEY_QUERY_PARAM = `&api_key=xxxx`;
const IMAGE_PREFIX = 'https://image.tmdb.org/t/p/w500';

const movies = document.getElementById('main');
const searchForm = document.getElementById('search-form');
const searchField = document.getElementById('search');

searchForm.addEventListener('submit', search);

function getRatingClass(rating) {
  if (rating >= 8) return 'green';
  else if (rating < 8 && rating > 5) return 'orange';
  else return 'red';
}

function render(results) {
  movies.innerHTML = '';
  results.forEach((movie) => {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie');

    const image = document.createElement('img');
    image.src = `${IMAGE_PREFIX}${movie.backdrop_path}`;
    image.alt = movie.original_title;

    const movieInfoContainer = document.createElement('div');
    movieInfoContainer.classList.add('movie-info');

    const movieTitle = document.createElement('h3');
    movieTitle.textContent = movie.original_title;

    const movieRating = document.createElement('span');
    movieRating.classList.add(getRatingClass(movie.vote_average));
    movieRating.textContent = movie.vote_average;

    movieInfoContainer.appendChild(movieTitle);
    movieInfoContainer.appendChild(movieRating);

    const overviewContainer = document.createElement('div');
    overviewContainer.classList.add('overview');
    overviewContainer.innerHTML = `
      <h3>Overview</h3>
      ${movie.overview}
    `;

    movieContainer.appendChild(image);
    movieContainer.appendChild(movieInfoContainer);
    movieContainer.appendChild(overviewContainer);

    movies.appendChild(movieContainer);
  });
}

async function search(e) {
  e.preventDefault();

  const value = searchField.value.trim();

  if (!value || value === '') return;

  const req = await fetch(
    `${API_URL}/search/movie?query="${value}"${API_KEY_QUERY_PARAM}`,
  );

  const { results } = await req.json();

  render(results);
}

async function loadData() {
  const res = await fetch(
    `${API_URL}/discover/movie?sort_by=popularity.desc${API_KEY_QUERY_PARAM}`,
  );

  const { results } = await res.json();

  render(results);
}

loadData();
