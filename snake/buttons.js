let upArrow = document.querySelector("#up");
let downArrow = document.querySelector("#down");
let leftArrow = document.querySelector("#left");
let rightArrow = document.querySelector("#right");

upArrow.addEventListener("click", () => {
  keyCode = 38;
});

downArrow.addEventListener("click", () => {
  keyCode = 40;
});

leftArrow.addEventListener("click", () => {
  keyCode = 37;
});

rightArrow.addEventListener("click", () => {
  keyCode = 39;
});
