// Theme toggle
const switcher = document.getElementById("themeSwitcher");
switcher.addEventListener("change", () => {
  document.body.classList.toggle("dark", switcher.checked);
});

// Contact form submission (placeholder)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll get back to you soon.");
  this.reset();
});
