const totaal = document.getElementById("Totaal");
const eerste = document.getElementById("Eerste");
const laatste = document.getElementById("Laatste");
const lijst = document.getElementById("Lijst");

const things = ["Eten", "Gamen", "Muziek", "Slapen", "Racen"];

eerste.innerHTML = `Eerste item: ${things[0]}`;
laatste.innerHTML = `Laatste item: ${things[things.length - 1]}`;
totaal.innerHTML = `Totaal aantal items: ${things.length}`;

things[1] = "Lezen";
lijst.innerHTML = `Nieuwe lijst: ${things.join(", ")}`;
