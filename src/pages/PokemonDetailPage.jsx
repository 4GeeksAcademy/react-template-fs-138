import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import PokemonDetailCard from "../components/PokemonDetailCard";
import pokemonServices from "../servicies/pokemonServices";

const PokemonDetail = () => {
  const{store,dispatch} = useGlobalReducer()
  const navigate =useNavigate()

  const params = useParams()
  const pokemonName =params.name

  const [pokemon,setPokemon]=useState( store.pokemonList.find(pokemon=>pokemon.name ===pokemonName))

  const {loading} =store

  function handleBack() {
    navigate(-1);
  }


  useEffect (()=>{
    
    async function getOnePokemon (pokemonName){
      const pokemonData = await pokemonServices.getPokemonByName(pokemonName)
    setPokemon(pokemonData)
    }

    if(!pokemon){
      getOnePokemon(pokemonName)
    }


  },[])

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <button onClick={handleBack} className="btn btn-outline-secondary">
          <ArrowLeft className="me-2" size={18} /> Volver
        </button>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
        
        { loading? <p>Cargando...</p>:  <PokemonDetailCard pokemon={pokemon} />}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail