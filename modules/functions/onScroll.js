// Get the button
export const moveUp = document.getElementById("move-up");

// Management of the display of the button when the page is scrolled and management of the scroll behavior on click
export function onScroll() {
  window.onscroll = () => scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    moveUp.style.display = "flex";
  } else {
    moveUp.style.display = "none";
  }
}

moveUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
