const button = document.getElementById("button");
const advicef = document.getElementById("advies");

const activiteiten = [
    "Naar de sportschool",
    "Slapen",
    "Een nieuwe stad ontdekken",
    "Koken",
    "Rusten"
];

const aanvullingen = [
    "In de avond",
    "'s ochtends vroeg",
    "Met een bakje koffie",
    "Met een kopje thee",
    "Met een vriend of vriendin"
];

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * activiteiten.length);
    const randomAanvullingIndex = Math.floor(Math.random() * aanvullingen.length);

    advicef.textContent =
        `Vandaag ga je ${activiteiten[randomIndex]} ${aanvullingen[randomAanvullingIndex]}.`;
});