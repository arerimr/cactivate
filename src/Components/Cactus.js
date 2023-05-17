import React from 'react'

export default function Cactus({ cactus }) {
    return (
        <div className='cactus'>
            <span><h2>{cactus.name} Cactus</h2>{cactus.flowers ? "🌸" : null}{cactus.edible ? "🍴" : null}</span>
            <img src={cactus.image} alt={cactus.name} />
            <h3>{cactus.origin}</h3>
        </div>
    )
}
