import {
  fetchDataByIngredient,
  byIngredientList,
} from "./modules/fetchDataByIngredient.js";
import {
  fetchDataByCocktailName,
  responseList,
} from "./modules/fetchDataByCocktailName.js";
import { idList } from "./modules/fetchDataById.js";

const inputFilter = document.getElementById("input-filter");
const btnFilter = document.getElementById("btn-filter");
inputFilter.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnFilter.click();
  }
});
btnFilter.addEventListener("click", () => {
  byIngredientList.innerHTML = "";
  responseList.innerHTML = "";
  idList.innerHTML = "";
  fetchDataByIngredient();
});

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
inputSearch.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnSearch.click();
  }
});
btnSearch.addEventListener("click", () => {
  byIngredientList.innerHTML = "";
  responseList.innerHTML = "";
  idList.innerHTML = "";
  fetchDataByCocktailName();
});
