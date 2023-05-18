import { Controller } from "@hotwired/stimulus";

const url = "https://wagon-garage-api.herokuapp.com/youcef-pimp-my-ride/cars";

export default class extends Controller {
  static targets = ["list", "brand","model","owner","plate"];

  connect() {
    this.getCars();
  }

  addCar(event) {
    event.preventDefault();

    const newCar = {
      brand: this.brandTarget.value,
      model: this.modelTarget.value,
      owner: this.ownerTarget.value,
      plate: this.plateTarget.value
    }

    fetch(url , {
      method : "POST",
      headers : {
        'Content-Type': "application/json"
      },
      body : JSON.stringify(newCar)
    } )
    .then(response => response.json())
    .then(() => {
      this.getCars();
    })
  }

  getCars() {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.listTarget.innerHTML = '';

      data.forEach((car) => {
        const card = `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
        </div>
        <div class="car-info">
          <a href="" data-id=${car.id} data-action='click->garage#deleteCar'>Delete</a>
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong>${car.owner}</p>
          <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
      </div>`;
        this.listTarget.insertAdjacentHTML("beforeend" , card);
      });
    });
  }

  deleteCar(event) {
    event.preventDefault();

    const carId = event.target.dataset.id;

    fetch(`https://wagon-garage-api.herokuapp.com/cars/${carId}`, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then(() => {
      this.getCars();
    })
  }
}
