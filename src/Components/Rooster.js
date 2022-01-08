import React from "react"
import pokemons from "../pokemonRooster"
import PokemonCard from "./PokemonCard"
import RentPokemonView from "./RentPokemonView"

const Rooster = () => {
    return (
        <div className="h-screen w-screen pt-8">
            <div className="m-auto text-center font-semibold text-xl">Hello Roosters!</div>
            <div className="m-auto text-center my-4">
                <button className="bg-blue-500 hover:bg-blue-600 focus:ring-2 text-white rounded-md py-1 px-4" >Primary</button>
            </div>
                <section className="w-full flex flex-row flex-wrap justify-center my-12">
                    {
                    pokemons.map(poke => (
                        PokemonCard(poke)
                     ))
                }
                    </section>
            <section className="my-12 flex justify-center">
                <RentPokemonView />
            </section>
        </div>
    )
}

export default Rooster