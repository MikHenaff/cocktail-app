import { responseList } from "../../main.js";
import { fetchDataById } from "./fetchDataById.js";

export let idByLetter;

export async function fetchDataByCocktailList(letter) {
  // Call API returning all cocktails which name starts with the clicked letter
  let url;
  if (letter) {
    url = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;

    // If there is only one result, the cocktail is displayed in a complete card
    if (drinks.length === 1) {
      idByLetter = drinks[0].idDrink;
      fetchDataById(idByLetter);
      idByLetter = "";
    }
    // Otherwise, a sorted alphabetically list of cocktails which name starts with the letter is returned
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
            idByLetter = li.getAttribute("id");
            fetchDataById(idByLetter);
            idByLetter = "";
          });

          responseList.appendChild(li);
        });
    }
  } catch {
    alert(`Sorry, there is no cocktails starting with the letter "${letter}"`);
  }
}
