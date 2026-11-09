const mouseover = document.getElementById("mouseover");
const mouseout = document.getElementById("mouseout");

mouseover.addEventListener("mouseover", () => {
    mouseover.style.backgroundColor = "orange";
    mouseout.style.color = "black";
    mouseover.style.width = "600px";
    mouseout.textContent = "Nice hover";
});

mouseover.addEventListener("mouseout", () => {
    mouseover.style.backgroundColor = "yellow";
    mouseout.style.color = "black";
    mouseover.style.width = "500px";
    mouseout.textContent = "Toppie";
});