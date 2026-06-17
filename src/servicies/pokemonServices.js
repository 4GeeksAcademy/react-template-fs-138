async function getAllPokemon(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await response.json()
    return data
}

async function getPokemonInfo(url){
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function getPokemonByName(nameFilter) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${nameFilter.toLowerCase()}`
    );
    const data = await response.json();
    return data;
}

const pokemonServices ={
    getAllPokemon,
    getPokemonInfo,
    getPokemonByName
}

export default pokemonServices