import { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css'
import cactus from '../Assets/cactus.jpg'
import { Link } from 'react-router-dom'

export default function Puzzle() {
    const [text, setText] = useState("Unpuzzle the pieces🌵");

    const set = () => {
        setText(`Prickly Pear (aka nopal) Cactus!`);
    };
    return (
        <div className='puzzle'>
            <h2 className="tag">{text}<Link style={text === "Unpuzzle the pieces🌵" ? { display: "none" } : { display: "block" }} to={`/cacti/1`}>Learn more!</Link></h2>
            <section>
                <JigsawPuzzle
                    imageSrc={cactus}
                    rows={3}
                    columns={3}
                    onSolved={set}
                    className="jigsaw-puzzle"
                />
                <div>
                    <img src={cactus} alt='puzzle solved' />
                </div>
                <br />
            </section>
        </div>
    )
}
