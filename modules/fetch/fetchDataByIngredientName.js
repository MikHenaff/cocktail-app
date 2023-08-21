import { inputIngredientSearch, responseList } from "../../main.js";
import { fetchDataById } from "./fetchDataById.js";

export let idByIngredient;

export async function fetchDataByIngredientName(ingredientValue) {
  // ingredientValue could be passed from fetchDataByIngredientList or from the input
  ingredientValue
    ? ingredientValue
    : (ingredientValue = inputIngredientSearch.value);

  // Call API returning all cocktails containing the ingredient
  let url;
  if (ingredientValue) {
    url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientValue}`;
    inputIngredientSearch.value = "";
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;

    // If there is only one result, the cocktail is displayed in a complete card (ex: "firewater" as value will display the "Fahrenheit 5000" cocktail)
    if (drinks.length === 1) {
      idByIngredient = drinks[0].idDrink;
      fetchDataById(idByIngredient);
      inputIngredientSearch.focus();
      idByIngredient = "";
    }
    // Otherwise, a list of cocktails containing the ingredient is returned (ex: "rum" as value)
    else {
      drinks.map((drink) => {
        const li = document.createElement("li");
        li.setAttribute("id", drink.idDrink);

        const name = document.createElement("h2");
        name.innerText = drink.strDrink;
        li.appendChild(name);

        const img = document.createElement("img");
        img.setAttribute("src", `${drink.strDrinkThumb}/preview`);
        img.setAttribute("alt", drink.strDrink);
        li.appendChild(img);

        // Each cocktail of the list is clickable for a complete display by id
        li.addEventListener("click", () => {
          idByIngredient = li.getAttribute("id");
          fetchDataById(idByIngredient);
          inputIngredientSearch.focus();
          idByIngredient = "";
        });

        responseList.appendChild(li);
      });
    }
  } catch {
    alert("Sorry, this ingredient is unknown, please try again !");
  }
}
