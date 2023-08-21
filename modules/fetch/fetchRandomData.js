import { responseList } from "../../main.js";
import { fetchDataById } from "./fetchDataById.js";

export let randomId;

export async function fetchRandomData() {
  responseList.innerHTML = "";

  // Call API returning a random cocktail
  const url = `https://thecocktaildb.com/api/json/v1/1/random.php`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    const drink = result.drinks[0];

    // Get the id of the cocktail and display it in a complete card
    randomId = drink.idDrink;
    fetchDataById(randomId);
  } catch (error) {
    alert("Sorry, the connexion with the database failed, please try again !");
  }
}
