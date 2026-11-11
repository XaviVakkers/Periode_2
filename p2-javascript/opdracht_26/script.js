const een = document.getElementById('kleur2');
const twee = document.getElementById('kleur1');

setInterval(() => {
    const hex = '#' + Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, '0');

    twee.style.backgroundColor = hex;
    een.innerHTML = `Current RGB code is: ${twee.style.backgroundColor}`;
}, 1000);