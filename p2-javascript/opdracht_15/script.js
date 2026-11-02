let redbull = 0;
const display1 = document.getElementById("redbull");
const display2 = document.getElementById("antwoord");

function updateDisplay() {
    if (redbull === 0) {
        display1.style.backgroundColor = "white";
        display2.textContent = "Neem een redbulletje";
    } else if (redbull >= 1 && redbull <= 3) {
        display1.style.backgroundColor = "red";
        display2.textContent = "Geniet";
    } else if (redbull >= 4) {
        display1.style.backgroundColor = "orange";
        display2.textContent = "Dat is genoeg";
    }
    else {
        display.style.backgroundColor = "";
    }
}

function plus() {
    redbull++;
    updateDisplay();
    display1.textContent = redbull;

}

function minus() {
    redbull--;
    updateDisplay();
    if (redbull <= 0) {
        redbull = 0;
    }

    display.textContent = redbull;
}

function reset() {
    redbull = 0;
    updateDisplay();
    display.textContent = redbull;
}

updateDisplay();