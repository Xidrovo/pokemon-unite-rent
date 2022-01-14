import React, { useState } from 'react'
import pokemonRooster from '../pokemonRooster'
import PokemonCard from './PokemonCard'

const RentPokemonView = () => {
    const [team1, setTeam1] = useState([])
    const [team2, setTeam2] = useState([])

    function randomizePokemons(numberOfTeams = 2) {
        let size = pokemonRooster.length
        let pickedPokemons = []
        for (let team = 1; team <= numberOfTeams; team++) {
            while (pickedPokemons.length < 6) {
                let selectedPokemon = Math.floor(Math.random() * size)
                if (!pickedPokemons.includes(selectedPokemon)) {
                    pickedPokemons.push(selectedPokemon)
                }
            }
            if (team === 1) {
                setTeam1(pickedPokemons)
            } else {
                setTeam2(pickedPokemons)
            }
            pickedPokemons = []
        }
    }
    return (
        <section className="w-full">
            <article className="flex flex-row justify-center">
                <button
                    className="p-2 px-6 bg-indigo-900 text-white font-semibold rounded-full"
                    onClick={() => randomizePokemons()}
                >
                    {' '}
                    Rent Pokemons!
                </button>
            </article>
            {team1.length > 0 && (
                <section className="py-8 flex flex-col justify-evenly">
                    <article className="py-6">
                        <h3 className="font-semibold text-lg ml-4">Team 1</h3>
                        <div className="py-4 flex flex-row justify-center flex-wrap">
                            {team1.map((team) => {
                                return PokemonCard(pokemonRooster[team])
                            })}
                        </div>
                    </article>
                    <article className="py-6">
                        <h3 className="font-semibold text-lg ml-4">Team 2</h3>
                        <div className="py-4 flex flex-row justify-center flex-wrap">
                            {team2.map((team) => {
                                return PokemonCard(pokemonRooster[team])
                            })}
                        </div>
                    </article>
                </section>
            )}
        </section>
    )
}

export default RentPokemonView
