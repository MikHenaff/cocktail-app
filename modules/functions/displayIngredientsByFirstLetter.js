import { fetchDataByIngredientList } from "../fetch/fetchDataByIngredientList.js";
import { responseList, alphabetList } from "../../main.js";

export function displayIngredientsByFirstLetter() {
  // if "All ingredients" is selected
  // Create Alphabet letters
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  let alphabet = alpha.map((x) => String.fromCharCode(x));
  // Hide the letters when "All ingredients" is not selected
  //  alphabetList.style.display = "none";
  alphabet.map((letter) => {
    const li = document.createElement("li");
    letter !== "Z"
      ? (li.innerHTML = `&thinsp;${letter}&thinsp;|`)
      : (li.innerHTML = `&thinsp;${letter}`);
    // Fetch data from the letter clicked
    li.addEventListener("click", () => {
      responseList.innerHTML = "";
      console.log(letter);
      fetchDataByIngredientList(letter);
    });
    // Display the cocktails starting with the letter
    alphabetList.appendChild(li);
  });
}
