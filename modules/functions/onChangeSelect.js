import {
  inputNameSearch,
  inputIngredientSearch,
  responseList,
  alphabetList,
} from "../../main.js";
import { fetchRandomData } from "../fetch/fetchRandomData.js";
import { displayCocktailsByFirstLetter } from "./displayCocktailsByFirstLetter.js";
import { displayIngredientsByFirstLetter } from "./displayIngredientsByFirstLetter.js";

const selectOption = document.getElementById("select");

// Management of the HTML element select on change
export function onChangeSelect() {
  selectOption.addEventListener("change", () => {
    const divName = document.getElementById("div-name-search");
    const divIngredient = document.getElementById("div-ingredient-search");
    const randomBtn = document.getElementById("random-btn");

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
        divName.style.display = "block";
        inputNameSearch.focus();
        break;
      case "ingredient":
        responseList.innerText = "";
        alphabetList.style.display = "none";
        divName.style.display = "none";
        randomBtn.style.display = "none";
        divIngredient.style.display = "block";
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
