import React from "react"
import pokemons from "../pokemonRooster"
import PokemonCard from "./PokemonCard"
import RentPokemonView from "./RentPokemonView"
import TeamBuilder from "./TeamBuilder"

const Rooster = () => {
    return (
        <div className="min-h-screen w-screen bg-blue-100">
                {/* <section className="w-full flex flex-row flex-wrap justify-center my-12">
                    {
                    pokemons.map(poke => (
                        PokemonCard(poke)
                     ))
                }
                    </section> */}
                <TeamBuilder></TeamBuilder>
            <section className="py-12 flex justify-center w-full">
                <RentPokemonView />
            </section>
        </div>
    )
}

export default Rooster