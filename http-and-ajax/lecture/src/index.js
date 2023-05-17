// EVENT LISTENER

const button = document.querySelector('#click-me');
button.addEventListener('click', (event) => {
  event.target.innerText = 'Clicked';
  event.target.disabled = true;
});

// FETCH - GET method

const getMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
  .then((response) => response.json())
  .then((data) => {
    const movies = data.Search;

    list.innerHTML = '';

    movies.forEach((movie) => {
      const title = movie.Title;
      const poster = movie.Poster;

      const li = `
        <li>
          <p>${title}</p>
          <img src="${poster}">
        </li>
      `;

      list.insertAdjacentHTML('beforeend', li);
    });
  });
};

const list = document.querySelector('#results');
const form = document.querySelector('#search-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const input = form.querySelector('#search-input');

  getMovies(input.value);
});

getMovies('harry potter');


// FETCH - POST method

const loginForm = document.querySelector('#form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#password');

  const data = {
    email: emailInput.value, // eve.holt@reqres.in
    password: passwordInput.value, // pistol
  };

  fetch("https://reqres.in/api/register", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
});
