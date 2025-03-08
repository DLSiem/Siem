const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Load Theme from Local Storage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  themeIcon.src = "assets/sun.png";
}

// Toggle Theme
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeIcon.src = "assets/sun.png";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.src = "assets/moon.png";
  }
});

// Mobile Menu Toggle
menuToggle.addEventListener("click", (event) => {
  navLinks.classList.toggle("active");
  event.stopPropagation();
});

// Close Menu when Clicking Outside
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove("active");
  }
});
