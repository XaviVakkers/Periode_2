const broth = [
    { naam: "Shoyu", emoji: "🧂", rating: 3 },
    { naam: "Miso", emoji: "🍶", rating: 4 }
];

const noodles = [
    { naam: "Ramen", emoji: "🍜", rating: 4 },
    { naam: "Udon", emoji: "🍲", rating: 3 }
];

const toppings = [
    { naam: "Shrimp", emoji: "🦐", rating: 5 },
    { naam: "Egg", emoji: "🥚", rating: 4 }
];

const spiceLevel = [
    { naam: "Mild", emoji: "♨️", rating: 2 },
    { naam: "Spicy", emoji: "🌶️", rating: 4 }
];

const button = document.getElementById("button");
const result = document.getElementById("result");

function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

button.addEventListener("click", () => {
    const gekozenB = randomItem(broth);
    const gekozenN = randomItem(noodles);
    const gekozenT = randomItem(toppings);
    const gekozenS = randomItem(spiceLevel);

    result.textContent =
        `Jouw ramen is: ${gekozenB.emoji} ${gekozenB.naam}, ` +
        `${gekozenN.emoji} ${gekozenN.naam},  ` +
        `${gekozenT.emoji} ${gekozenT.naam}, ` +
        `${gekozenS.emoji} ${gekozenS.naam}!`;
});