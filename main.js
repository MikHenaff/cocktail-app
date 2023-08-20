import { fetchDataByIngredient } from "./modules/fetch/fetchDataByIngredient.js";
import { fetchDataByCocktailName } from "./modules/fetch/fetchDataByCocktailName.js";
//import { fetchAlphabeticalData } from "./modules/fetch/fetchAlphabeticalData.js";
import { onChangeSelect } from "./modules/functions/onChangeSelect.js";
import { onScroll } from "./modules/functions/onScroll.js";
//import { displayCocktailsByFirstLetter } from "./modules/functions/displayCocktailsByFirstLetter.js";
//import { displayIngredientsByFirstLetter } from "./modules/functions/displayIngredientsByFirstLetter.js";

onChangeSelect();
onScroll();

// variable for display lists of ingredients or cocktails
export const responseList = document.getElementById("response-list");
// variable for display the letters for an alphabetical searching
export const alphabetList = document.getElementById("alphabet");

// if "Search by cocktail name" is selected
// Get input and button
const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
// Click with Enter key
inputSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnSearch.click();
  }
});
// Fetch data
btnSearch.addEventListener("click", () => {
  responseList.innerHTML = "";
  fetchDataByCocktailName();
});

// if "Search by ingredient" is selected
// Get input and button
const inputFilter = document.getElementById("input-filter");
const btnFilter = document.getElementById("btn-filter");
// Click with Enter key
inputFilter.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnFilter.click();
  }
});
// Fetch data
btnFilter.addEventListener("click", () => {
  responseList.innerHTML = "";
  fetchDataByIngredient();
});

//// if "All cocktails" is selected
//// Create Alphabet letters
//const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//let alphabet = alpha.map((x) => String.fromCharCode(x));
//// Hide the letters when "All cocktails" is not selected
//alphabetList.style.display = "none";
//alphabet.map((letter) => {
//  const li = document.createElement("li");
//  letter !== "Z"
//    ? (li.innerHTML = `&thinsp;${letter}&thinsp;|`)
//    : (li.innerHTML = `&thinsp;${letter}`);
//  // Fetch data from the letter clicked
//  li.addEventListener("click", (e) => {
//    e.preventDefault;
//    responseList.innerHTML = "";
//    fetchAlphabeticalData(letter);
//  });
//  // Display the cocktails starting with the letter
//  alphabetList.appendChild(li);
//});

//displayCocktailsByFirstLetter();

//displayIngredientsByFirstLetter();
