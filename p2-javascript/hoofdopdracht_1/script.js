document.getElementById("body");
document.getElementById("H1");
document.getElementById("img");
document.getElementById("button");
document.getElementById("button2");
function Doeilicht() {
    body.style.backgroundColor = "black";
    H1.style.color = "white";
    img.style.filter = "invert(100%)";
    H1.textContent = "Hallo donker";
    button1.style.borderColor = "white";
    button1.style.backgroundColor = "black";
    button1.style.color = "white";
}
function Doeidonker() {
    body.style.backgroundColor = "white";
    H1.style.color = "black";
    img.style.filter = "invert(0%)";
    H1.textContent = "Hallo licht"
    button2.style.borderColor = "black";
    button2.style.backgroundColor = "white";
    button2.style.color = "black";
}