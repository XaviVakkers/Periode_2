let budget = prompt("Wat is je budget?");
let product = 60;
document.getElementById("button");
document.getElementById("display");


if (budget >= product) {
    display.textContent = "Je hebt genoeg geld";
    display.style.backgroundColor = "green";
} else {
    display.textContent = "Je hebt niet genoeg geld";
    display.style.backgroundColor = "red";
}