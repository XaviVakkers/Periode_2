let drink = prompt("Wat wil je drinken?");
document.getElementById("display");

if (drink === "cola") {
    display.textContent = "Je krijgt een blikje cola 🥤";
    display.style.backgroundColor = "red";
} else if (drink === "water") {
    display.textContent = "Goed bezig, lekker gezond 💧";
    display.style.backgroundColor = "blue";
} else if (drink === "koffie") {
    display.textContent = "Energie incoming ☕";
    display.style.backgroundColor = "brown";
} else {
    display.textContent = "dit drankje is helaas op";
    display.style.backgroundColor = "yellow";
}