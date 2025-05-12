// Trigger image animation
document.getElementById("animateBtn").addEventListener("click", () => {
  const image = document.getElementById("demoImage");

  image.classList.add("animate-shake");

  // Remove the animation class after animation ends so it can be re-applied
  image.addEventListener("animationend", () => {
    image.classList.remove("animate-shake");
  }, { once: true });
});

// Store and retrieve theme preference
const themeStatus = document.getElementById("themeStatus");
const saveButton = document.getElementById("saveTheme");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeStatus.textContent = "Dark";
  } else {
    document.body.classList.remove("dark-mode");
    themeStatus.textContent = "Light";
  }
}

// Load preference on page load
const savedTheme = localStorage.getItem("userTheme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// Save preference and apply
saveButton.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
  localStorage.setItem("userTheme", newTheme);
  applyTheme(newTheme);
});

