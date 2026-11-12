const openKnop = document.getElementById("open");
const modal = document.getElementById("modal");
const controleerKnop = document.getElementById("controleer");

openKnop.addEventListener("click", () => {
    modal.style.display = "block";
});

controleerKnop.addEventListener("click", () => {
    const leeftijd = document.getElementById("leeftijd").value;

    if (leeftijd > 18) {
        window.location.href = "https://www.wikipedia.org";
    } else {
        document.body.style.backgroundColor = "rgb(165, 11, 11)";
        document.body.innerHTML = "<h1>Helaas, je bent te jong</h1>";
    }
});
