import { idByIngredient } from "./fetchDataByIngredient.js";
import { idByName } from "./fetchDataByCocktailName.js";
import { idByLetter } from "./fetchAlphabeticalData.js";
import { responseList } from "../../main.js";

export async function fetchDataById(id) {
  responseList.innerHTML = "";
  idByIngredient
    ? (id = idByIngredient)
    : idByName
    ? (id = idByName)
    : (id = idByLetter);
  let url;
  if (id) {
    url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  }
  try {
    const response = await fetch(url);
    const result = await response.json();
    const drink = result.drinks[0];

    const li = document.createElement("li");

    const name = document.createElement("h2");
    name.innerText = drink.strDrink;
    li.appendChild(name);

    const img = document.createElement("img");
    img.setAttribute("src", `${drink.strDrinkThumb}/preview`);
    img.setAttribute("alt", drink.strDrink);
    li.appendChild(img);

    let ingredientsTable = [];
    const ingredients = document.createElement("p");
    if (drink.strIngredient1 && drink.strMeasure1) {
      ingredientsTable.push(drink.strIngredient1 + ": " + drink.strMeasure1);
    } else if (drink.strIngredient1 && !drink.strMeasure1) {
      ingredientsTable.push(drink.strIngredient1);
    }
    if (drink.strIngredient2 && drink.strMeasure2) {
      ingredientsTable.push(drink.strIngredient2 + ": " + drink.strMeasure2);
    } else if (drink.strIngredient2 && !drink.strMeasure2) {
      ingredientsTable.push(drink.strIngredient2);
    }
    if (drink.strIngredient3 && drink.strMeasure3) {
      ingredientsTable.push(drink.strIngredient3 + ": " + drink.strMeasure3);
    } else if (drink.strIngredient3 && !drink.strMeasure3) {
      ingredientsTable.push(drink.strIngredient3);
    }
    if (drink.strIngredient4 && drink.strMeasure4) {
      ingredientsTable.push(drink.strIngredient4 + ": " + drink.strMeasure4);
    } else if (drink.strIngredient4 && !drink.strMeasure4) {
      ingredientsTable.push(drink.strIngredient4);
    }
    if (drink.strIngredient5 && drink.strMeasure5) {
      ingredientsTable.push(drink.strIngredient5 + ": " + drink.strMeasure5);
    } else if (drink.strIngredient5 && !drink.strMeasure5) {
      ingredientsTable.push(drink.strIngredient5);
    }
    if (drink.strIngredient6 && drink.strMeasure6) {
      ingredientsTable.push(drink.strIngredient6 + ": " + drink.strMeasure6);
    } else if (drink.strIngredient6 && !drink.strMeasure6) {
      ingredientsTable.push(drink.strIngredient6);
    }
    if (drink.strIngredient7 && drink.strMeasure7) {
      ingredientsTable.push(drink.strIngredient7 + ": " + drink.strMeasure7);
    } else if (drink.strIngredient7 && !drink.strMeasure7) {
      ingredientsTable.push(drink.strIngredient7);
    }
    if (drink.strIngredient8 && drink.strMeasure8) {
      ingredientsTable.push(drink.strIngredient8 + ": " + drink.strMeasure8);
    } else if (drink.strIngredient8 && !drink.strMeasure8) {
      ingredientsTable.push(drink.strIngredient8);
    }
    if (drink.strIngredient9 && drink.strMeasure9) {
      ingredientsTable.push(drink.strIngredient9 + ": " + drink.strMeasure9);
    } else if (drink.strIngredient9 && !drink.strMeasure9) {
      ingredientsTable.push(drink.strIngredient9);
    }
    if (drink.strIngredient10 && drink.strMeasure10) {
      ingredientsTable.push(drink.strIngredient10 + ": " + drink.strMeasure10);
    } else if (drink.strIngredient10 && !drink.strMeasure10) {
      ingredientsTable.push(drink.strIngredient10);
    }
    if (drink.strIngredient11 && drink.strMeasure11) {
      ingredientsTable.push(drink.strIngredient11 + ": " + drink.strMeasure11);
    } else if (drink.strIngredient11 && !drink.strMeasure11) {
      ingredientsTable.push(drink.strIngredient11);
    }
    if (drink.strIngredient12 && drink.strMeasure12) {
      ingredientsTable.push(drink.strIngredient12 + ": " + drink.strMeasure12);
    } else if (drink.strIngredient12 && !drink.strMeasure12) {
      ingredientsTable.push(drink.strIngredient12);
    }
    if (drink.strIngredient13 && drink.strMeasure13) {
      ingredientsTable.push(drink.strIngredient13 + ": " + drink.strMeasure13);
    } else if (drink.strIngredient13 && !drink.strMeasure13) {
      ingredientsTable.push(drink.strIngredient13);
    }
    if (drink.strIngredient14 && drink.strMeasure14) {
      ingredientsTable.push(drink.strIngredient14 + ": " + drink.strMeasure14);
    } else if (drink.strIngredient14 && !drink.strMeasure14) {
      ingredientsTable.push(drink.strIngredient14);
    }
    if (drink.strIngredient15 && drink.strMeasure15) {
      ingredientsTable.push(drink.strIngredient15 + ": " + drink.strMeasure15);
    } else if (drink.strIngredient15 && !drink.strMeasure15) {
      ingredientsTable.push(drink.strIngredient15);
    }
    ingredientsTable = ingredientsTable.join("<br>");
    ingredients.innerHTML = `<span class="bold">Ingredients:</span><br>${ingredientsTable}`;
    li.appendChild(ingredients);

    const instructions = document.createElement("p");
    instructions.innerHTML = `<span class="bold">Instructions:</span><br>${drink.strInstructions}`;
    li.appendChild(instructions);

    responseList.appendChild(li);
  } catch (error) {
    console.error(error);
  }
}
