import { fetchDataByIngredientList } from "../fetch/fetchDataByIngredientList.js";
import { responseList, alphabetList } from "../../main.js";

export function displayIngredientsByFirstLetter() {
  // if "All ingredients" is selected

  // Create alphabet letters
  const alphabet = Array.from(Array(26))
    .map((_, index) => index + 65)
    .map((codeNumber) => String.fromCharCode(codeNumber));

  alphabet.map((letter) => {
    const li = document.createElement("li");
    li.setAttribute("class", "letter");
    letter !== "Z"
      ? (li.innerHTML = `&thinsp;${letter}&thinsp;|`)
      : (li.innerHTML = `&thinsp;${letter}`);

    // Each letter is clickable for fetching the corresponding data
    li.addEventListener("click", () => {
      responseList.innerHTML = "";
      fetchDataByIngredientList(letter);
    });

    alphabetList.appendChild(li);
  });
}
