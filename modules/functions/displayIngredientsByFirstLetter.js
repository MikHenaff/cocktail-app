import { fetchDataByIngredientList } from "../fetch/fetchDataByIngredientList.js";
import { responseList, alphabetList } from "../../main.js";

export function displayIngredientsByFirstLetter() {
  // if "All ingredients" is selected

  // Create Alphabet letters
  const alpha = Array.from(Array(26)).map((_, i) => i + 65);
  let alphabet = alpha.map((x) => String.fromCharCode(x));

  alphabet.map((letter) => {
    const li = document.createElement("li");
    letter !== "Z"
      ? (li.innerHTML = `&thinsp;${letter}&thinsp;|`)
      : (li.innerHTML = `&thinsp;${letter}`);

    // Each letter is made clickable for fetching the corresponding data
    li.addEventListener("click", () => {
      responseList.innerHTML = "";
      fetchDataByIngredientList(letter);
    });

    alphabetList.appendChild(li);
  });
}
