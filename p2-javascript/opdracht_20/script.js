const button = document.getElementById("button");
const display = document.getElementById("emoji");

button.addEventListener("click", function () {
    const emojis = ["🥳", "😴", "🤩", "🥶", "🤯", "😭", "😈", "🤖", "🐸", "🐵", "🦄", "🐼", "🦋", "🐙", "🦖", "🍕", "🍔", "🍩", "🍉", "🍓", "⚽", "🏀", "🎸", "🚀", "🌈"];
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const randomEmoji = emojis[randomIndex];
    display.innerHTML = `${randomEmoji} : ${randomIndex}`;
}
);