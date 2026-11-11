const Emoji = ["😂", "😭", "🤔", "😎", "🤗"]
const Hallo = document.getElementById("Hallo")
let index = 0;

setInterval(() => {
    Hallo.innerHTML = Emoji[index];
    index = (index + 1) % Emoji.length;
}, 500);