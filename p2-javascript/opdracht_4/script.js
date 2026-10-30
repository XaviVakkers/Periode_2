const geboortejaar = Number(prompt("In welk jaar ben je geboren?"));
const huidigJaar = new Date().getFullYear();
const leeftijd = huidigJaar - geboortejaar;

document.getElementById("leeftijd").textContent =
    `Je bent ongeveer ${leeftijd} jaar oud.`;