import { fetchDataByIngredientName } from "./modules/fetch/fetchDataByIngredientName.js";
import { fetchDataByCocktailName } from "./modules/fetch/fetchDataByCocktailName.js";
import {
  onChangeSelect,
  selectOption,
  divName,
  divIngredient,
  randomBtn,
} from "./modules/functions/onChangeSelect.js";
import { onScroll } from "./modules/functions/onScroll.js";

onChangeSelect();
onScroll();

// variable for displaying lists of ingredients or cocktails
export const responseList = document.getElementById("response-list");

// variable for displaying the letters for an alphabetical searching
export const alphabetList = document.getElementById("alphabet");

// if "Search for a cocktail by name" is selected
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

// if "Search for a cocktail by ingredient" is selected
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

// Click on the homePage page will hide it and display the header, the footer and the select element
const homePage = document.getElementById("home-page");
const header = document.getElementById("header");
homePage.addEventListener("click", () => {
  homePage.style.display = "none";
  header.style.display = "flex";
  footer.style.display = "flex";
  selectOption.style.display = "flex";
  selectOption.value = "choose";

  // Allow the overflow when the user is not on the homepage
  homePage.style.display === "none"
    ? (document.body.style.overflowY = "visible")
    : (document.body.style.overflowY = "hidden");
});

// Click on the image in the header will reinitialize everything and display the homepage
const headerImg = document.getElementById("header-img");
headerImg.addEventListener("click", () => {
  responseList.innerText = "";
  alphabetList.style.display = "none";
  divName.style.display = "none";
  divIngredient.style.display = "none";
  randomBtn.style.display = "none";
  homePage.style.display = "none";
  header.style.display = "none";
  footer.style.display = "none";
  selectOption.style.display = "none";
  homePage.style.display = "flex";

  // Hide the overflow on the homepage (with firefox)
  homePage.style.display === "flex"
    ? (document.body.style.overflowY = "hidden")
    : (document.body.style.overflowY = "visible");
});
