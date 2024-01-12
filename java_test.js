const button = document.getElementById("unser-button");
button.addEventListener("click", abc);
function abc() {
  const seitenueberschrift = document.getElementById("seitenueberschrift");
  seitenueberschrift.innerHTML = "Hallo";
}
