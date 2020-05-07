// User Story : Afficher toutes les voitures dans mon API
// Récupérer toutes les voitures (AJAX request)
// (Dans le callback) Afficher les voitures / Injecter des cards avec les infos de la voiture

const addCar = (car) => {
  const card = `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} - ${car.model}</h4>
        <p><strong>Owner:</strong>${car.owner}</p>
        <p><strong>Plate:</strong>${car.plate}</p>
      </div>
    </div>`;
  const carsList = document.querySelector(".cars-list");
  carsList.insertAdjacentHTML('beforeend', card);
};

const fetchCars = () => {
  fetch("https://wagon-garage-api.herokuapp.com/401/cars")
    .then(response => response.json())
    .then((data) => {
      data.forEach((car) => {
        // console.log(car);
        addCar(car);
      });
    });
};

export { fetchCars, addCar };
