import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"
import pokemonServices from "../servicies/pokemonServices"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const { dispatch } = useGlobalReducer()
    useEffect(() => {
        async function fetchPokemon() {
            // INDICAMOS QUE ESTAMOS CARGANDO LA PAGINA
            dispatch({ type: 'setLoading', payload: true })


            //LLAMAMOS A LA API PARA TRAERNOS EL LISTADO DE POKEMON
            const pokemonList = await pokemonServices.getAllPokemon()
            dispatch({ type: 'setPrevious', payload: pokemonList.previous })
            dispatch({ type: 'setNext', payload: pokemonList.next })


            // LLAMAMOS A LA API PARA TRAERNOS EL DETALLE DE LOS POKEMON
            const pokemonsDetailPromise = pokemonList.results.map((pokemon) => {
                return pokemonServices.getPokemonInfo(pokemon.url)
            })
            const pokemonDetails = await Promise.all(pokemonsDetailPromise)
            console.log(pokemonDetails)
            dispatch({ type: 'setPokemonList', payload: pokemonDetails })
            dispatch({ type: 'setLoading', payload: false })

        }

        fetchPokemon()


    }
        , [])
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}