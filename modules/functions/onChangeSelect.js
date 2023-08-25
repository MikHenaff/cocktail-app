import {
  inputNameSearch,
  inputIngredientSearch,
  responseList,
  alphabetList,
} from "../../main.js";
import { fetchRandomData } from "../fetch/fetchRandomData.js";
import { displayCocktailsByFirstLetter } from "./displayCocktailsByFirstLetter.js";
import { displayIngredientsByFirstLetter } from "./displayIngredientsByFirstLetter.js";

export const selectOption = document.getElementById("select");
export const divName = document.getElementById("div-name-search");
export const divIngredient = document.getElementById("div-ingredient-search");
export const randomBtn = document.getElementById("random-btn");

// Management of the select element on change
export function onChangeSelect() {
  selectOption.addEventListener("change", () => {
    switch (selectOption.value) {
      case "choose":
        responseList.innerText = "";
        alphabetList.style.display = "none";
        divName.style.display = "none";
        divIngredient.style.display = "none";
        randomBtn.style.display = "none";
        break;
      case "name":
        responseList.innerText = "";
        alphabetList.style.display = "none";
        divIngredient.style.display = "none";
        randomBtn.style.display = "none";
        divName.style.display = "flex";
        inputNameSearch.focus();
        break;
      case "ingredient":
        responseList.innerText = "";
        alphabetList.style.display = "none";
        divName.style.display = "none";
        randomBtn.style.display = "none";
        divIngredient.style.display = "flex";
        inputIngredientSearch.focus();
        break;
      case "all-cocktails":
        responseList.innerText = "";
        alphabetList.innerText = "";
        divName.style.display = "none";
        divIngredient.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "flex";
        displayCocktailsByFirstLetter();
        break;
      case "all-ingredients":
        responseList.innerText = "";
        alphabetList.innerText = "";
        divName.style.display = "none";
        divIngredient.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "flex";
        displayIngredientsByFirstLetter();
        break;
      case "random":
        responseList.innerText = "";
        alphabetList.style.display = "none";
        divName.style.display = "none";
        divIngredient.style.display = "none";
        randomBtn.style.display = "block";
        randomBtn.addEventListener("click", fetchRandomData);
        break;
    }
  });
}
