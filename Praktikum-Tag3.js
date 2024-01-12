const button = document.getElementById("Drueck-mich");
button.addEventListener("click", Hallo);
function Hallo() {
  const text = document.getElementById("text");
  text.innerHTML = "Dieser Text ist dank Java Script erschienen";
}
