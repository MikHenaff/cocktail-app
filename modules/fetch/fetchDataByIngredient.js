import { fetchDataById } from "./fetchDataById.js";
import { responseList } from "../../main.js";

//export const byIngredientList = document.getElementById("by-ingredient-list");

export let idByIngredient;

export async function fetchDataByIngredient(ingredientValue) {
  const inputFilter = document.getElementById("input-filter");
  ingredientValue ? ingredientValue : (ingredientValue = inputFilter.value);
  //const ingredientValue = inputFilter.value;

  let url;

  if (ingredientValue) {
    url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientValue}`;
    inputFilter.value = "";
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;
    if (drinks.length === 1) {
      idByIngredient = drinks[0].idDrink;
      fetchDataById(idByIngredient);
      idByIngredient = "";
    } else {
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

        li.addEventListener("click", () => {
          idByIngredient = li.getAttribute("id");
          fetchDataById(idByIngredient);
          idByIngredient = "";
        });

        responseList.appendChild(li);
      });
    }
  } catch {
    alert("Error: this ingredient is unknown, try again !");
  }
}
