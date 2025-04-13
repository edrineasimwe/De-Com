// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Dark/Light mode toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    themeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

// Simple contact form handler
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Functionality can be hooked to a real backend)");
});

