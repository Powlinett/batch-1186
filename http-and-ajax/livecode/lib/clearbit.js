const authorization = "Bearer sk_10d313de3da1601b25f192435ba6b05f";
const url = `https://person.clearbit.com/v1/people/email`;

// choper notre input
const input = document.querySelector('#clearbitEmail');
const form = document.querySelector('#clearbitForm');
const emailTd = document.getElementById('userEmail');
const nameTd = document.getElementById('userName');
const bioTd = document.getElementById('userBio');
const locationTd = document.getElementById('userLocation');

const insertData = (data) => {
  const email = data.email;
  const bio = data.bio;
  const location  = data.location;
  const name = data.name.fullName;
  emailTd.innerText = email;
  bioTd.innerText = bio;
  locationTd.innerText = location;
  nameTd.innerText = name;
}


// écouter le submit du formulaire
form.addEventListener('submit', () => {
  const inputValue = input.value;
  fetch(`${url}/${inputValue}`, {
    headers: { Authorization: authorization }
  })
  .then(response => response.json())
  .then((data) => insertData(data));
});

