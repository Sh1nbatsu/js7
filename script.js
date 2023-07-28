const nav = document.querySelector("nav");

const divs = document.querySelectorAll(".tabs-wrapper > div");

console.log(divs);

nav.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const activeNumber = event.target.dataset.tab;
    divs.forEach((item) => {
      item.classList.remove("active");
    });
    divs[activeNumber - 1].classList.add("active");
  }
});
