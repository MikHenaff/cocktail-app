import { fetchDataByIngredientName } from "./modules/fetch/fetchDataByIngredientName.js";
import { fetchDataByCocktailName } from "./modules/fetch/fetchDataByCocktailName.js";
import { onChangeSelect } from "./modules/functions/onChangeSelect.js";
import { onScroll } from "./modules/functions/onScroll.js";

onChangeSelect();
onScroll();

// variable for displaying lists of ingredients or cocktails
export const responseList = document.getElementById("response-list");

// variable for displaying the letters for an alphabetical searching
export const alphabetList = document.getElementById("alphabet");

// if "Search for a cocktail name" is selected
// Get input and button
export const inputNameSearch = document.getElementById("input-name-search");
const btnNameSearch = document.getElementById("btn-name-search");
// Click with Enter key
inputNameSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnNameSearch.click();
  }
});
// Fetch data
btnNameSearch.addEventListener("click", () => {
  responseList.innerHTML = "";
  fetchDataByCocktailName();
});

// if "Search by ingredient" is selected
// Get input and button
export const inputIngredientSearch = document.getElementById(
  "input-ingredient-search"
);
const btnIngredientSearch = document.getElementById("btn-ingredient-search");
// Click with Enter key
inputIngredientSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnIngredientSearch.click();
  }
});
// Fetch data
btnIngredientSearch.addEventListener("click", () => {
  responseList.innerHTML = "";
  fetchDataByIngredientName();
});
