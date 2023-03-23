
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");


decrementBtn.addEventListener("click", () => {

  const value = Number(displayValue.innerText);
  
  displayValue.innerText = value - 1;

  
});


incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);

  displayValue.innerText = value + 1;

});


resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});