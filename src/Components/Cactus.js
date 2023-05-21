import React from 'react'
import { Link } from 'react-router-dom'

export default function Cactus({ cactus }) {
    return (
        <div className='cactus'>
            <h2>{cactus.name} Cactus</h2><span className='icons'>{cactus.flowers ? "🌸" : null}{cactus.edible ? "🍴" : null}</span>
            <Link to={`/cacti/${cactus.id}`}><img src={cactus.image} alt={cactus.name} /></Link>
            <h3>{cactus.origin}</h3>
        </div>
    )
}
