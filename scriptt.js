// Dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Image popup
function openImage(img) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-img").src = img.src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}

// Scroll animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

// Typing effect
const text = "Hi, I'm Your Name 👋";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;
