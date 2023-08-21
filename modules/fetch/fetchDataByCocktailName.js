import { inputNameSearch, responseList } from "../../main.js";
import { fetchDataById } from "./fetchDataById.js";

export let idByName;

export async function fetchDataByCocktailName() {
  // Get the value of the input
  const cocktailValue = inputNameSearch.value;

  // Call API returning all cocktails containing the value in their name
  let url;
  if (cocktailValue) {
    url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailValue}`;
    inputNameSearch.value = "";
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;

    // If there is only one result, the cocktail is displayed in a complete card (ex: "adam" as value)
    if (drinks.length === 1) {
      idByName = drinks[0].idDrink;
      fetchDataById(idByName);
      inputNameSearch.focus();
      idByName = "";
    }
    // Otherwise, a sorted alphabetically list of cocktails containing the value in their names is returned (ex: "margarita" or "marg" as value)
    else {
      drinks
        .sort((a, b) => {
          if (a.strDrink < b.strDrink) {
            return -1;
          }
          return 0;
        })
        .map((drink) => {
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
            idByName = li.getAttribute("id");
            fetchDataById(idByName);
            inputNameSearch.focus();
            idByName = "";
          });

          responseList.appendChild(li);
        });
    }
  } catch {
    alert("Sorry, this cocktail is unknown, please try again !");
  }
}
