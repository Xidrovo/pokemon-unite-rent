import React from 'react'
import '../index.css'
// import pokemons from '../pokemonRooster'
// import PokemonCard from './PokemonCard'

import RentPokemonView from './RentPokemonView'
import TeamBuilder from './TeamBuilder'
import Header from './Header'

const Rooster = () => {
    return (
        <div className="max-w-full overflow-x-hidden">
            <Header />
            <div id="pokemon">
                <div className="min-h-screen w-screen bg-white bg-opacity-50">
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
            </div>
        </div>
    )
}

export default Rooster
