// Get one element
const list = document.querySelector('#players');

// Get all elements
const listItems = list.querySelectorAll('li');

listItems.forEach((listItem) => {
  console.log(listItem.innerText);
});


// Append DOM

const fifaWins = document.querySelector('#fifa-wins');

fifaWins.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');


// Read/Write input value
const input = document.querySelector('#email'); // document.getElementById('email');
console.log(input.value); // 'paul@gmail.com'

input.value = 'john@gmail.com';

// Read attributes
const link = document.querySelector('#home');
console.log(link.innerText); // 'Le Wagon rocks'
console.log(link.innerHTML); // 'Le Wagon <em>rocks</em>'
console.log(link.attributes.href.value);

// Read datasets
const user = document.querySelector('#user');
console.log(user.dataset.uid);
console.log(user.dataset.githubNickname);


// Event listeners

const images = document.querySelectorAll('img');

images.forEach((image) => {
  image.addEventListener('click', (event) => {
    image.classList.toggle('img-circle');
  });
});

