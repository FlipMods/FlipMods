async function EnergyDrinks() {
  const response = await fetch("https://e32de032e2ee2.w3spaces.com/eg.json");
  const eg = await response.json();
  document.getElementById("ED").innerHTML = eg;
}
async function Projects() {
  const response = await fetch("https://e32de032e2ee2.w3spaces.com/PRJ.json");
  const prg = await response.json();
  document.getElementById("PRJ").innerHTML = prg;
}
async function Hours() {
  const response = await fetch("https://e32de032e2ee2.w3spaces.com/hours.json");
  const hs = await response.json();
  document.getElementById("HRS").innerHTML = hs;
}
