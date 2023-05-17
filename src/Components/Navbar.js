import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='navbar'>
            <h1><Link to='/'>Cac🌵ivate</Link></h1>
            <h2><Link to='/cacti'>CACTI LIST</Link></h2>
            <button><h2><Link to='/new'>ADD NEW CACTUS</Link></h2></button>
        </div>
    )
}
