import { fetchRandomData } from "../fetch/fetchRandomData.js";

let selectOption = document.getElementById("select");

export function onChangeSelect() {
  selectOption.addEventListener("change", () => {
    const divSearch = document.getElementById("display-search");
    const divFilter = document.getElementById("display-filter");
    const randomBtn = document.getElementById("random-btn");

    switch (selectOption.value) {
      case "name":
        divFilter.style.display = "none";
        randomBtn.style.display = "none";
        divSearch.style.display = "block";
        break;
      case "ingredient":
        divSearch.style.display = "none";
        randomBtn.style.display = "none";
        divFilter.style.display = "block";
        break;
      case "all-cocktails":
        console.log("all-cocktailsOK");
        break;
      case "all-ingredients":
        console.log("all-ingredientsOK");
        break;
      case "random":
        divFilter.style.display = "none";
        divSearch.style.display = "none";
        randomBtn.style.display = "block";
        randomBtn.addEventListener("click", fetchRandomData);
        break;
    }
  });
}
