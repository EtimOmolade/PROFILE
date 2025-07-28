let temperature = 18; // initial temperature
const display = document.getElementById("display");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

function updateDisplay() {
  display.textContent = `${temperature}°C`;
}

increaseBtn.addEventListener("click", () => {
  if (temperature < 30) {
    temperature++;
    updateDisplay();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (temperature > 16) {
    temperature--;
    updateDisplay();
  }
});