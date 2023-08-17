import { liIdTable } from "./fetchDataByIngredient.js";

liIdTable ? console.log(liIdTable) : console.log("fuck");

export const IdList = document.getElementById("id-list");

//export async function fetchDataById() {
//  let url;
//  let CocktailId;
//  if (CocktailId) {
//    url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${CocktailId}`;
//  }

//  try {
//    const response = await fetch(url);
//    const result = await response.json();
//    const drinks = result.drinks;
//    //drinks.map((drink) => {
//    const li = document.createElement("li");
//    //  li.setAttribute("id", drink.idDrink);

//    const name = document.createElement("h2");
//    name.innerText = drinks.strDrink;
//    li.appendChild(name);

//    const img = document.createElement("img");
//    img.setAttribute("src", `${drinks.strDrinkThumb}/preview`);
//    img.setAttribute("alt", drinks.strDrink);
//    li.appendChild(img);

//    let ingredientsTable = [];
//    const ingredients = document.createElement("p");
//    if (drinks.strIngredient1 && drinks.strMeasure1) {
//      ingredientsTable.push(drinks.strIngredient1 + ": " + drinks.strMeasure1);
//    } else if (drinks.strIngredient1 && !drinks.strMeasure1) {
//      ingredientsTable.push(drinks.strIngredient1);
//    }
//    if (drinks.strIngredient2 && drinks.strMeasure2) {
//      ingredientsTable.push(drinks.strIngredient2 + ": " + drinks.strMeasure2);
//    } else if (drinks.strIngredient2 && !drinks.strMeasure2) {
//      ingredientsTable.push(drinks.strIngredient2);
//    }
//    if (drinks.strIngredient3 && drinks.strMeasure3) {
//      ingredientsTable.push(drinks.strIngredient3 + ": " + drinks.strMeasure3);
//    } else if (drinks.strIngredient3 && !drinks.strMeasure3) {
//      ingredientsTable.push(drinks.strIngredient3);
//    }
//    if (drinks.strIngredient4 && drinks.strMeasure4) {
//      ingredientsTable.push(drinks.strIngredient4 + ": " + drinks.strMeasure4);
//    } else if (drinks.strIngredient4 && !drinks.strMeasure4) {
//      ingredientsTable.push(drinks.strIngredient4);
//    }
//    if (drinks.strIngredient5 && drinks.strMeasure5) {
//      ingredientsTable.push(drinks.strIngredient5 + ": " + drinks.strMeasure5);
//    } else if (drinks.strIngredient5 && !drinks.strMeasure5) {
//      ingredientsTable.push(drinks.strIngredient5);
//    }
//    if (drinks.strIngredient6 && drinks.strMeasure6) {
//      ingredientsTable.push(drinks.strIngredient6 + ": " + drinks.strMeasure6);
//    } else if (drinks.strIngredient6 && !drinks.strMeasure6) {
//      ingredientsTable.push(drinks.strIngredient6);
//    }
//    if (drinks.strIngredient7 && drinks.strMeasure7) {
//      ingredientsTable.push(drinks.strIngredient7 + ": " + drinks.strMeasure7);
//    } else if (drinks.strIngredient7 && !drinks.strMeasure7) {
//      ingredientsTable.push(drinks.strIngredient7);
//    }
//    if (drinks.strIngredient8 && drinks.strMeasure8) {
//      ingredientsTable.push(drinks.strIngredient8 + ": " + drinks.strMeasure8);
//    } else if (drinks.strIngredient8 && !drinks.strMeasure8) {
//      ingredientsTable.push(drinks.strIngredient8);
//    }
//    if (drinks.strIngredient9 && drinks.strMeasure9) {
//      ingredientsTable.push(drinks.strIngredient9 + ": " + drinks.strMeasure9);
//    } else if (drinks.strIngredient9 && !drinks.strMeasure9) {
//      ingredientsTable.push(drinks.strIngredient9);
//    }
//    if (drinks.strIngredient10 && drinks.strMeasure10) {
//      ingredientsTable.push(
//        drinks.strIngredient10 + ": " + drinks.strMeasure10
//      );
//    } else if (drinks.strIngredient10 && !drinks.strMeasure10) {
//      ingredientsTable.push(drinks.strIngredient10);
//    }
//    if (drinks.strIngredient11 && drinks.strMeasure11) {
//      ingredientsTable.push(
//        drinks.strIngredient11 + ": " + drinks.strMeasure11
//      );
//    } else if (drinks.strIngredient11 && !drinks.strMeasure11) {
//      ingredientsTable.push(drinks.strIngredient11);
//    }
//    if (drinks.strIngredient12 && drinks.strMeasure12) {
//      ingredientsTable.push(
//        drinks.strIngredient12 + ": " + drinks.strMeasure12
//      );
//    } else if (drinks.strIngredient12 && !drinks.strMeasure12) {
//      ingredientsTable.push(drinks.strIngredient12);
//    }
//    if (drinks.strIngredient13 && drinks.strMeasure13) {
//      ingredientsTable.push(
//        drinks.strIngredient13 + ": " + drinks.strMeasure13
//      );
//    } else if (drinks.strIngredient13 && !drinks.strMeasure13) {
//      ingredientsTable.push(drinks.strIngredient13);
//    }
//    if (drinks.strIngredient14 && drinks.strMeasure14) {
//      ingredientsTable.push(
//        drinks.strIngredient14 + ": " + drinks.strMeasure14
//      );
//    } else if (drinks.strIngredient14 && !drinks.strMeasure14) {
//      ingredientsTable.push(drinks.strIngredient14);
//    }
//    if (drinks.strIngredient15 && drinks.strMeasure15) {
//      ingredientsTable.push(
//        drinks.strIngredient15 + ": " + drinks.strMeasure15
//      );
//    } else if (drinks.strIngredient15 && !drinks.strMeasure15) {
//      ingredientsTable.push(drinks.strIngredient15);
//    }
//    ingredientsTable = ingredientsTable.join("\n");
//    ingredients.innerText = ingredientsTable;
//    li.appendChild(ingredients);

//    const instructions = document.createElement("p");
//    instructions.innerHTML = `<span class="bold">Instructions:</span><br>${drinks.strInstructions}`;
//    li.appendChild(instructions);

//    IdList.appendChild(li);
//  } catch (error) {
//    console.error(error);
//  }
//}
