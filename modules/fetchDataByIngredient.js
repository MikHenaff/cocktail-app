export const byIngredientList = document.getElementById("by-ingredient-list");
//export const cocktailListElements = document.getElementsByTagName("li");

export let liIdTable = [];

export async function fetchDataByIngredient() {
  const inputFilter = document.getElementById("input-filter");
  const ingredientValue = inputFilter.value;

  let url;

  if (ingredientValue) {
    url = `https://thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientValue}`;
  }

  try {
    const response = await fetch(url);
    const result = await response.json();
    const drinks = result.drinks;

    drinks.map((drink) => {
      const li = document.createElement("li");
      li.setAttribute("id", drink.idDrink);
      liIdTable.push(drink.idDrink);

      const name = document.createElement("h2");
      name.innerText = drink.strDrink;
      li.appendChild(name);

      const img = document.createElement("img");
      img.setAttribute("src", `${drink.strDrinkThumb}/preview`);
      img.setAttribute("alt", drink.strDrink);
      li.appendChild(img);

      byIngredientList.appendChild(li);
    });
  } catch (error) {
    console.error(error);
  }
  console.log(liIdTable); // ********************** ici ça marche !!!!!!!!!!!!!!!!!!!!!!!
}
