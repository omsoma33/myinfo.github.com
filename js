function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function openImage(img) {
  document.getElementById("popup").style.display = "block";
  document.getElementById("popup-img").src = img.src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}
