import React from 'react'

const setRole = (role) => {
    switch (role.toLowerCase()) {
        case 'attacker':
            return 'bg-orange-500'
        case 'supporter':
            return 'bg-yellow-500'
        case 'defender':
            return 'bg-green-500'
        case 'all around':
            return 'bg-indigo-500'
        case 'speedster':
            return 'bg-blue-500'
        default:
            return
    }
}

const PokemonCard = ({ name, number, role }) => {
    return (
        <div className="p-6 flex flex-col w-40 h-40" key={number}>
            <p className="text-center font-semibold">{name}</p>
            <img
                className="object-contain"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                alt={name}
            ></img>
            <p
                className={`text-center text-white font-semibold rounded-full ${setRole(
                    role
                )}`}
            >
                {role}
            </p>
        </div>
    )
}

export default PokemonCard
