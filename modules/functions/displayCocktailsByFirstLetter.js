import { fetchDataByCocktailList } from "../fetch/fetchDataByCocktailList.js";
import { responseList, alphabetList } from "../../main.js";

export function displayCocktailsByFirstLetter() {
  // if "All cocktails" is selected

  // Create alphabet letters
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  let alphabet = alpha.map((x) => String.fromCharCode(x));

  alphabet.map((letter) => {
    const li = document.createElement("li");
    li.setAttribute("class", "letter");
    letter !== "Z"
      ? (li.innerHTML = `&thinsp;${letter}&thinsp;|`)
      : (li.innerHTML = `&thinsp;${letter}`);

    // Each letter is clickable for fetching the corresponding data
    li.addEventListener("click", () => {
      responseList.innerHTML = "";
      fetchDataByCocktailList(letter);
    });

    alphabetList.appendChild(li);
  });
}
