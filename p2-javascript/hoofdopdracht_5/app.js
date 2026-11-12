const hungerBar = document.getElementById("hungerBar");
const energyBar = document.getElementById("energyBar");
const happinessBar = document.getElementById("happinessBar");

const hungerLabel = document.getElementById("hungerLabel");
const energyLabel = document.getElementById("energyLabel");
const happinessLabel = document.getElementById("happinessLabel");

const feedButton = document.getElementById("feedbutton");
const sleepButton = document.getElementById("sleepbutton");
const playButton = document.getElementById("playbutton");
const status = document.getElementById("tamagotchistatus");

let hunger = 100;
let energy = 100;
let happiness = 100;
let dead = false;

function updateDisplay() {
    hungerLabel.textContent = `Honger: ${hunger}`;
    energyLabel.textContent = `Energie: ${energy}`;
    happinessLabel.textContent = `Geluk: ${happiness}`;

    hungerBar.style.width = `${hunger}%`;
    energyBar.style.width = `${energy}%`;
    happinessBar.style.width = `${happiness}%`;

    const needs = [];
    if (hunger < 50) needs.push("eten");
    if (energy < 50) needs.push("slapen");
    if (happiness < 50) needs.push("spelen");

    status.textContent = needs.length
        ? `Je Tamagotchi wil graag ${needs.join(" en ")}.`
        : "Je Tamagotchi is blij!";
}

function helpIfAlive(change) {
    if (dead) return;
    change();
    hunger = Math.min(100, hunger);
    energy = Math.min(100, energy);
    happiness = Math.min(100, happiness);
    updateDisplay();
}

feedButton.addEventListener("click", () => {
    helpIfAlive(() => hunger += 10);
});

sleepButton.addEventListener("click", () => {
    helpIfAlive(() => energy += 10);
});

playButton.addEventListener("click", () => {
    helpIfAlive(() => happiness += 10);
});

const interval = setInterval(() => {
    if (dead) return;

    hunger = Math.max(0, hunger - 1);
    energy = Math.max(0, energy - 1);
    happiness = Math.max(0, happiness - 1);

    if (hunger === 0 || energy === 0 || happiness === 0) {
        dead = true;
        status.textContent = "Je Tamagotchi is overleden.";
        clearInterval(interval);
        return;
    }

    updateDisplay();
}, 1000);

updateDisplay();

// const	Variabele die je niet opnieuw kunt toewijzen
// let	Variabele waarvan de waarde kan veranderen
// function	Een herbruikbaar stukje code
// if	Als een voorwaarde waar is
// else	Anders
// return	Stop met de functie
// document.getElementById()	Zoek een HTML-element
// textContent	Verander tekst op de pagina
// addEventListener()	Luister naar een gebeurtenis
// setInterval()	Voer code herhaaldelijk uit
// clearInterval()	Stop een interval
// Math.min()	Kies de laagste waarde
// Math.max()	Kies de hoogste waarde
// push()	Voeg iets toe aan een array 
