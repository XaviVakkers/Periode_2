const button = document.getElementById("button");
const input = document.getElementById("input");
const button2 = document.getElementById("button2");
const total = document.getElementById("totale");
const snacks = [
    document.getElementById("snack1"),
    document.getElementById("snack2"),
    document.getElementById("snack3")
];

let snackjes = [];

button.addEventListener("click", () => {
    const snack = input.value.trim();

    if (snack === "") {
        return;
    }
    if (snackjes.length >= snacks.length) {
        return;
    }
    snackjes.push(snack);

    snacks[snackjes.length - 1].textContent = snack;

    input.value = "";
    total.textContent = `Totale snacks: ${snackjes.length}`;
});

button2.addEventListener("click", () => {
    snackjes.pop();
    snacks[snackjes.length].textContent = "";
    total.textContent = `Totale snacks: ${snackjes.length}`;
});