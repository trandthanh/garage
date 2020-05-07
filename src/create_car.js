import { addCar } from './search_car';

const createCar = (event) => {
  event.preventDefault();
  // console.log('coucou');
  // console.log(document.getElementById("brand").value);

  const carObject = {};
  carObject.brand = document.getElementById("brand").value;
  carObject.model = document.getElementById("model").value;
  carObject.owner = document.getElementById("owner").value;
  carObject.plate = document.getElementById("plate").value;
  // console.log(carObject);

  fetch("https://wagon-garage-api.herokuapp.com/401/cars", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(carObject)
  })
    .then(response => response.json())
    .then((data) => {
      addCar(carObject);
    });
};

export { createCar };
