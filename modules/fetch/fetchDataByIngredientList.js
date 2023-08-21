import { responseList } from "../../main.js";
import { fetchDataByIngredientName } from "./fetchDataByIngredientName.js";

export async function fetchDataByIngredientList(letter) {
  //Call API returning a list of all available ingredients which name starts with the clicked letter
  const url = `https://thecocktaildb.com/api/json/v1/1/list.php?i=list`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    const ingredients = result.drinks;

    // Get a sorted alphabetically list of ingredients starting with the letter clicked
    const ingredientsFiltered = ingredients.filter(
      (ingredient) =>
        ingredient.strIngredient1[0].toLowerCase() === letter.toLowerCase()
    );
    // Check if there is no ingredients starting with the letter clicked (ex: "Q")
    if (ingredientsFiltered.length === 0) {
      alert(
        `Sorry, there is no ingredients starting with the letter "${letter}"`
      );
    } else {
      ingredientsFiltered
        .sort((a, b) => {
          if (a.strIngredient1.toLowerCase() < b.strIngredient1.toLowerCase()) {
            return -1;
          }
          return 0;
        })
        // Fetch the cocktails containing the ingredient chosen
        .map((ingredient) => {
          const name = document.createElement("li");
          name.innerText =
            ingredient.strIngredient1.charAt(0).toUpperCase() +
            ingredient.strIngredient1.slice(1);

          // Each ingredient of the list is clickable for a complete display of all cocktails containing it
          name.addEventListener("click", () => {
            responseList.innerHTML = "";
            fetchDataByIngredientName(name.innerText);
          });

          responseList.appendChild(name);
        });
    }
  } catch {
    alert("Sorry, the connexion with the database failed, please try again !");
  }
}
