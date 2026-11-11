const button = document.getElementById("klaar");
const buttonA = document.getElementById("terug");
const vragenlijst2 = document.getElementById("vragenlijst2");
const vragenlijst = document.getElementById("vragenlijst");
const output = document.getElementById("output");
const vraag = document.getElementById("vraag");
const antwoord = document.getElementById("antwoord");

const vragenlijst3 = [
    "ja",
    "nee",
    "misschien",
    "ik weet het niet",
    "vraag het later nog eens",
    "ik ben er niet zeker van",
    "het is mogelijk",
    "het is onwaarschijnlijk",
    "het is zeker",
    "het is onmogelijk"
];

button.addEventListener("click", () => {
    if (vraag.value.trim() === "") {
        output.textContent = "Vul je vraag hier in";
        return;
    }

    const willekeurigAntwoord =
        vragenlijst3[Math.floor(Math.random() * vragenlijst3.length)];

    antwoord.textContent = vraag.value + ", " + willekeurigAntwoord;

    antwoord.style.color =
        "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");

    output.textContent = "";
    vragenlijst.classList.add("hidden");
    vragenlijst2.classList.add("shown");

    vragenlijst2.animate(
        [
            { transform: "translateY(-100%)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );
});

buttonA.addEventListener("click", () => {
    vragenlijst.classList.remove("hidden");
    vragenlijst2.classList.remove("shown");

    vragenlijst.animate(
        [
            { transform: "translateY(-100%)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 }
        ],
        {
            duration: 400,
            easing: "ease-out"
        }
    );
});
