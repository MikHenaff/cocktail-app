import {
  fetchDataByIngredient,
  byIngredientList,
} from "./modules/fetchDataByIngredient.js";
import {
  fetchDataByCocktailName,
  responseList,
} from "./modules/fetchDataByCocktailName.js";
//import { fetchDataById } from "./modules/fetchDataById.js";

let cocktailListElements;

const btnFilter = document.getElementById("btn-filter");
btnFilter.addEventListener("click", (e) => {
  e.preventDefault();
  byIngredientList.innerHTML = "";
  responseList.innerHTML = "";
  fetchDataByIngredient();
  cocktailListElements = document.getElementsByTagName("li");
  //  if (drink.idDrink === "16333") console.log("ouf");
  //  console.log(cocktailListElements, cocktailListElements.length);
});

const btnSearch = document.getElementById("btn-search");
btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  byIngredientList.innerHTML = "";
  responseList.innerHTML = "";
  fetchDataByCocktailName();
  let cocktailListElements = document.getElementsByTagName("li");
});

//fetchDataById();
