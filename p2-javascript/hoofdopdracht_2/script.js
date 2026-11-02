let pizza = 0;
const display1 = document.getElementById("pizza");
const display2 = document.getElementById("yey");
const main = document.getElementById("main");
const playagain = document.getElementById("playagain");
const resetbutton = document.getElementById("resetbutton");
const winner = document.getElementById("winner");

function updateDisplay() {
    winner.classList.toggle("show", pizza >= 10);
    resetbutton.hidden = pizza < 10;

    if (pizza === 0) {
        display1.style.backgroundColor = "white";
        display2.textContent = "klik voor pizza!";
        main.style.backgroundColor = "white";
    } else if (pizza >= 1 && pizza <= 3) {
        display1.style.backgroundColor = "orange";
        display2.textContent = "MEER";
        main.style.backgroundColor = "orange";
    } else if (pizza >= 4 && pizza <= 9) {
        display1.style.backgroundColor = "red";
        display2.textContent = "GAAA";
        main.style.backgroundColor = "red";
    } else if (pizza >= 10) {
        display1.style.backgroundColor = "orange";
        display2.textContent = "GEWONNEN";
        main.style.backgroundColor = "orange";
    }
    else {
        display.style.backgroundColor = "";
    }
}

function plus() {
    pizza++;
    updateDisplay();
    display1.textContent = pizza;

}

function minus() {
    pizza--;
    updateDisplay();
    if (pizza <= 0) {
        pizza = 0;
    }

    display1.textContent = pizza;
}

function reset() {
    if (pizza >= 10) {
        pizza = 0;
        updateDisplay();
        display1.textContent = pizza;
    }
}

updateDisplay();