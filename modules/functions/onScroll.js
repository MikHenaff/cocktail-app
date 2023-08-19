let moveUp = document.getElementById("move-up");

export function onScroll() {
  window.onscroll = () => scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    moveUp.style.display = "block";
  } else {
    moveUp.style.display = "none";
  }
}

moveUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
