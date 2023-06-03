import React from 'react'

import './App.css'

export default function Pokemonlist({pokemon}) {
  return (
    <div className='list'>
        {pokemon.map(p=>(
            <div key={p}> {p}</div>
        ))}

    </div>
  )
}
