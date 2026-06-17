import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import pokemonServices from "../servicies/pokemonServices.js";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CardPokemon from "../components/CardPokemon.jsx";

export const HomePage = () => {

	const { store, dispatch } = useGlobalReducer()
	
	const {pokemonListByPage,loading,next,previous} =store


	async function handleNextPage(){
		  dispatch({ type: 'setLoading', payload: true })


			    const pokemonList = await pokemonServices.getPokemonInfo(next)
            dispatch({ type: 'setPrevious', payload: pokemonList.previous })
            dispatch({ type: 'setNext', payload: pokemonList.next })


            // LLAMAMOS A LA API PARA TRAERNOS EL DETALLE DE LOS POKEMON
            const pokemonsDetailPromise = pokemonList.results.map((pokemon) => {
                return pokemonServices.getPokemonInfo(pokemon.url)
            })

			 const pokemonDetails = await Promise.all(pokemonsDetailPromise)

            dispatch({ type: 'setPokemonList', payload: pokemonDetails })

 		  dispatch({ type: 'setLoading', payload: false })


	}

		async function handlePreviousPage(){
		  dispatch({ type: 'setLoading', payload: true })


			    const pokemonList = await pokemonServices.getPokemonInfo(previous)
            dispatch({ type: 'setPrevious', payload: pokemonList.previous })
            dispatch({ type: 'setNext', payload: pokemonList.next })


            // LLAMAMOS A LA API PARA TRAERNOS EL DETALLE DE LOS POKEMON
            const pokemonsDetailPromise = pokemonList.results.map((pokemon) => {
                return pokemonServices.getPokemonInfo(pokemon.url)
            })

			 const pokemonDetails = await Promise.all(pokemonsDetailPromise)

            dispatch({ type: 'setPokemonList', payload: pokemonDetails })

 		  dispatch({ type: 'setLoading', payload: false })


	}




	return (
	<div className="container mt-5">
      <h1 className="text-center mb-4">Pokédex</h1>

      {loading && <div className="text-center">Cargando Pokémon...</div>}


      <div className="row justify-content-center">
        {pokemonListByPage.length > 0 && !loading ? (
          pokemonListByPage.map((pokemon, index) => (<CardPokemon key={index} pokemon={pokemon} />))
        ) : !loading  ? (
          <div className="text-center">No se encontró el Pokémon.</div>
        ) : null}
      </div>

      <div className="d-flex justify-content-center gap-2">
        <button className="btn btn-primary" style={{ "width": "5rem" }} onClick={handlePreviousPage} disabled ={previous ===null} >
          <ArrowLeft />
        </button>

        <button className="btn btn-primary" style={{ "width": "5rem" }}  onClick={handleNextPage} disabled ={next ===null}  >
          <ArrowRight />
        </button>
      </div>
    </div>
	);
}; 