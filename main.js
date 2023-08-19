import { fetchDataByIngredient } from "./modules/fetch/fetchDataByIngredient.js";
import { fetchDataByCocktailName } from "./modules/fetch/fetchDataByCocktailName.js";
//import { idList } from "./modules/fetch/fetchDataById.js";
import { onChangeSelect } from "./modules/functions/onChangeSelect.js";
import { onScroll } from "./modules/functions/onScroll.js";

onChangeSelect();
onScroll();

export const responseList = document.getElementById("response-list");

const inputFilter = document.getElementById("input-filter");
const btnFilter = document.getElementById("btn-filter");
inputFilter.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    btnFilter.click();
  }
});
btnFilter.addEventListener("click", () => {
  //byIngredientList.innerHTML = "";
  responseList.innerHTML = "";
  //idList.innerHTML = "";
  fetchDataByIngredient();
});

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
if (inputSearch) {
  inputSearch.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      btnSearch.click();
    }
  });
}
if (btnSearch) {
  btnSearch.addEventListener("click", () => {
    //byIngredientList.innerHTML = "";
    responseList.innerHTML = "";
    //idList.innerHTML = "";
    fetchDataByCocktailName();
  });
}
