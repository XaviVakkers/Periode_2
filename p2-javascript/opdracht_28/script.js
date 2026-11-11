const array = [
    { naam: "Pikachu", type: "Electric", powerlevel: 5 },
    { naam: "Charmander", type: "Fire", powerlevel: 4 },
    { naam: "Squirtle", type: "Water", powerlevel: 3 },
    { naam: "Bulbasaur", type: "Grass", powerlevel: 3 },
    { naam: "Geodude", type: "Ghost", powerlevel: 5 }
];

const pokemonNaam = document.getElementById("pokemonNaam");
const pokemonType = document.getElementById("pokemonType");
const pokemonPower = document.getElementById("pokemonPower");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * array.length);
    const pokemon = array[randomIndex];

    pokemonNaam.textContent = pokemon.naam;
    pokemonType.textContent = pokemon.type;
    pokemonPower.textContent = pokemon.powerlevel;
});

