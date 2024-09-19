const screen = document.getElementById("calc-screen");

// Function for Calculator Input Screen
function updateScreen(value) {
  if (value === "C") {
    screen.value = "";
  } else if (value === "=") {
    try {
      screen.value = eval(screen.value);
    } catch {
      screen.value = "Error";
    }
  } else {
    screen.value += value;
  }
}

// Event Listener for Button Clicks
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    updateScreen(button.value);
  });
});

// Event Listener for Keyboard Inputs
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/"].includes(key)) {
    screen.value += key;
  } else if (key === "Enter" || key === "=") {
    updateScreen("=");
  } else if (key === "Backspace") {
    screen.value = screen.value.slice(0, -1);
  } else if (key === "Escape" || key === "c" || key === "C") {
    updateScreen("C");
  }
});
