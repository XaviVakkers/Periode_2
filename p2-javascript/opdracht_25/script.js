const loading = document.querySelector('#Hallo');
const loadingText = document.querySelector('h1');
const bar = document.querySelector('#bar');
let load = 0;
loadingText.style.color = 'grey';

const interval = setInterval(() => {
    load++;
    bar.style.backgroundColor = `rgba(255, 0, 0, ${load / 100})`;
    loadingText.innerHTML = `Loading... ${load}%`;
    bar.style.width = `${load}%`;
    if (load >= 100) {
        loadingText.innerHTML = 'Loading complete';
        load = 100;
        bar.style.width = '100%';
        bar.style.backgroundColor = 'green';
    }
}, 100);