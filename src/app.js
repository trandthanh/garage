// TODO: Build an awesome garage!

import { fetchCars } from './search_car';
import { createCar } from './create_car';

fetchCars();

// User Story: Ajouter une voiture avec le formulaire

// Je récupère le formulaire dans le DOM
// Lorsque l'utilisateur soumet le form

// On récupère les valeurs de l'utilisateur

// Envoyer une requête AJAX vers l'API pour créer une nouvelle voiture (POST)

const form = document.getElementById("new-car");
form.addEventListener('submit', createCar);
