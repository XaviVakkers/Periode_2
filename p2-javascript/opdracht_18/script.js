const input = document.querySelector("input");
const p = document.querySelector("p");
const counter = document.querySelector("#counter");

input.addEventListener("keyup", () => {

    counter.textContent = `${input.value.length}`;

    if (input.value.length >= 6) {
        p.textContent = "Sterk wachtwoord";
        p.style.color = "green";

    } else if (input.value.length > 0 && input.value.length < 6) {
        p.textContent = "Zwak wachtwoord";
        p.style.color = "red";
    } else {
        p.textContent = "Voer een wachtwoord in";
        p.style.color = "black";
    }
});