import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL;

export default function CactusDetails() {
    const [cactus, setCactus] = useState({})

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${API}/cacti/${id}`)
            .then((res) => setCactus(res.data))
            .catch((e) => console.warn(e))
    }, [id])

    const handleDelete = () => {
        axios.delete(`${API}/cacti/${id}`)
            .then(() => navigate('/cacti'))
            .catch((e) => console.warn(e))
    }

    return (
        <div className='details'>
            <section>
                <p><strong>Scientific Name:</strong> {cactus.scientific_name}</p>
                <p><strong>Origin:</strong> {cactus.origin}</p>
                <p><strong>Lifespan:</strong> {cactus.life_expectancy} years</p>
                <p><strong>Max Height:</strong> {cactus.max_height}</p>
            </section>
            <section>
                <h1>{cactus.name} Cactus</h1>
                <img src={cactus.image} alt={cactus.name} />
                <p><span>{cactus.flowers ? "🌸 BLOOMS" : null} {cactus.edible ? "🍴 EDIBLE" : null}</span></p>
                <Link to={`/cacti`}><button>🔙</button></Link> <Link to={`/cacti/${id}/edit`}><button>EDIT</button></Link> <button onClick={handleDelete}>DELETE</button>
            </section>
            <section>
                <br />
                <p><strong>Fun Fact:</strong> {cactus.fun_fact}</p>
                <br />
                <hr />
                <br />
                <p><strong>Care Instructions:</strong> {cactus.care_instructions}</p>
            </section>
        </div>
    )
}
