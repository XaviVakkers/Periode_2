const hallo = document.getElementById("hallo");
const main = document.getElementById("main");

let geklikt = false;

hallo.addEventListener("click", () => {
    geklikt = !geklikt;

    if (geklikt) {
        main.style.backgroundColor = "orange";
        hallo.textContent = "Doeg";
    } else {
        main.style.backgroundColor = "white";
        hallo.textContent = "Hallo";
    }
});
