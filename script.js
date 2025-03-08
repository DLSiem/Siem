document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Check for saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  // Toggle theme on button click
  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");

    // Save theme preference
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
});
