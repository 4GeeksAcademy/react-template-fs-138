export const initialStore = () => {
  return {
    pokemonList: [],
    pokemonListByPage:[],
    loading: false,
    next: null,
    previous: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'setPokemonList':
      const pokemonList = action.payload

      const merged = [...store.pokemonList, ...pokemonList].reduce(
        (acc, pokemon) => {
          acc[pokemon.id] = pokemon;
          return acc;
        },
        {}
      );
      return {
        ...store,
        pokemonList: Object.values(merged),
        pokemonListByPage:pokemonList
      };


    case 'setLoading':
      console.log(action.payload)
      const loadindStatus = action.payload
      return {
        ...store,
        loading: loadindStatus
      }

    case 'setPrevious':
      const previousUrl = action.payload
      return {
        ...store,
        previous: previousUrl
      }

    case 'setNext':
      const nextUrl = action.payload
      return {
        ...store,
        next: nextUrl
      }


    default:
      throw Error('Unknown action.');
  }
}
