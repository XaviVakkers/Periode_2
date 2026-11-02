age = prompt("Wat is je leeftijd?");
disp = document.getElementById("display");

if (age >= 65) {
    display.textContent = "Welkom, senior bezoeker!";
    display.style.backgroundColor = "grey";
} else if (age >= 18) {
    display.textContent = "Welkom, volwassen bezoeker!";
    display.style.backgroundColor = "green";
} else {
    display.textContent = "Je mag hier nog niet naar binnen";
    display.style.backgroundColor = "red";
}