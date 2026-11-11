const nummers = [
    { titel: "titel1", artiest: "artiest1", duur: 2, emoji: "💔" },
    { titel: "titel2", artiest: "artiest2", duur: 3, emoji: "🔥" },
    { titel: "titel3", artiest: "artiest3", duur: 5, emoji: "🕺" },
    { titel: "titel4", artiest: "artiest4", duur: 4, emoji: "💔" },
    { titel: "titel5", artiest: "artiest5", duur: 6, emoji: "🔥" }
];

const IT = document.getElementById("hallo");

for (let i = 0; i < nummers.length; i++) {
    IT.innerHTML += `${nummers[i].emoji} ${nummers[i].titel} – ${nummers[i].artiest} (${nummers[i].duur} minuten) <br>`;
}