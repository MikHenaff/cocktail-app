import { fetchDataById } from "./fetchDataById.js";
import { responseList } from "../../main.js";
//const responseList = document.getElementById("response-list");

export let idByName;

export async function fetchDataByCocktailName() {
  let inputSearch = document.getElementById("input-search");
  let cocktailValue = inputSearch.value;

  let url;

  if (cocktailValue) {
    url = `https://thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailValue}`;
    inputSearch.value = "";
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;
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
        idByName = li.getAttribute("id");
        fetchDataById(idByName);
        idByName = "";
      });

      responseList.appendChild(li);
    });
  } catch {
    alert("Error: this cocktail name is unknown, try again !");
  }
}
