import { fetchDataById } from "./fetchDataById.js";
//import { idByName } from "./fetchDataByCocktailName.js";
import { responseList } from "../../main.js";
//const responseList = document.getElementById("response-list");

export let idByLetter;

export async function fetchAlphabeticalData(letter) {
  //  let inputSearch = document.getElementById("input-search");
  //  let cocktailValue = inputSearch.value;

  let url;

  if (letter) {
    url = `https://thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    // issue: all cocktails are not listed (ex: Butterfly Effect exists when searching by name but doesn't exist in the Alphabetical list from this url) =====>>>  MAX 100 réponses dans retour
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;
    console.log(drinks.length);
    if (drinks.length === 1) {
      idByLetter = drinks[0].idDrink;
      fetchDataById(idByLetter);
      idByLetter = "";
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
          idByLetter = li.getAttribute("id");
          fetchDataById(idByLetter);
          idByLetter = "";
        });

        responseList.appendChild(li);
      });
    }
  } catch {
    alert(
      `Sorry, we don't have cocktails starting with the letter "${letter}"`
    );
  }
}
