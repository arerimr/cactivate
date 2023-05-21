import axios from 'axios'
import { useState, useEffect } from 'react';
import Cactus from './Cactus';
import Filters from './Filters';

const API = process.env.REACT_APP_API_URL;

export default function Cacti() {
    const [cacti, setCacti] = useState([])
    const [allCacti, setAllCacti] = useState([])

    useEffect(() => {
        axios.get(`${API}/cacti`)
            .then((res) => {
                setCacti(res.data)
                setAllCacti(res.data)
            })
            .catch((e) => console.warn(e))
    }, [])

    return (
        <div className='cacti'>
            <aside>
                <Filters setCacti={setCacti} allCacti={allCacti} />
            </aside>
            <section>
                {
                    cacti.map((cactus) => {
                        return <Cactus key={cactus.id} cactus={cactus} />
                    })
                }
            </section>
        </div>
    )
}
