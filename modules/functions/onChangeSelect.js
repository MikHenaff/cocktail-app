import { fetchRandomData } from "../fetch/fetchRandomData.js";
import { responseList } from "../../main.js";
import { alphabetList } from "../../main.js";
import { displayCocktailsByFirstLetter } from "./displayCocktailsByFirstLetter.js";
import { displayIngredientsByFirstLetter } from "./displayIngredientsByFirstLetter.js";

let selectOption = document.getElementById("select");

export function onChangeSelect() {
  selectOption.addEventListener("change", () => {
    const divSearch = document.getElementById("display-search");
    const divFilter = document.getElementById("display-filter");
    const randomBtn = document.getElementById("random-btn");

    switch (selectOption.value) {
      case "name":
        responseList.innerText = "";
        divFilter.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "none";
        divSearch.style.display = "block";
        break;
      case "ingredient":
        responseList.innerText = "";
        divSearch.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "none";
        divFilter.style.display = "block";
        break;
      case "all-cocktails":
        responseList.innerText = "";
        alphabetList.innerText = "";
        divFilter.style.display = "none";
        divSearch.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "flex";
        displayCocktailsByFirstLetter();
        break;
      case "all-ingredients":
        responseList.innerText = "";
        alphabetList.innerText = "";
        divFilter.style.display = "none";
        divSearch.style.display = "none";
        randomBtn.style.display = "none";
        alphabetList.style.display = "flex";
        displayIngredientsByFirstLetter();
        break;
      case "random":
        responseList.innerText = "";
        divFilter.style.display = "none";
        divSearch.style.display = "none";
        alphabetList.style.display = "none";
        randomBtn.style.display = "block";
        randomBtn.addEventListener("click", fetchRandomData);
        break;
    }
  });
}
