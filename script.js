// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple contact form handler
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent! (Functionality can be hooked to a real backend)");
});
