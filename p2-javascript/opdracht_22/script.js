const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");


button.addEventListener("click", () => {
    output.textContent = `Hallo, ${input.value}`;
    if (input.value === "") {
        output.textContent = "Vul hier je naam in";
    }
    input.value = "";
});