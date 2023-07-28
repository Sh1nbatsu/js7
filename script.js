const nav = document.querySelector("nav");

const divs = document.querySelectorAll(".tabs-wrapper > div");

console.log(divs);

function render(x) {
  const buttons = nav.querySelectorAll("button");
  divs.forEach((item) => {
    item.classList.remove("active");
  });
  buttons.forEach((item) => {
    item.classList.remove("active");
  });
  divs[x - 1].classList.add("active");
  buttons[x - 1].classList.add("active");
}


if (localStorage.active) {
  render(localStorage.active);
}

nav.addEventListener("click", (event) => {
  if (event.target.matches("button")) {
    const activeNumber = event.target.dataset.tab;
    render(activeNumber);
    localStorage.active = `${activeNumber}`;
  }
});
