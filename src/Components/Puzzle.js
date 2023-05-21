import { useState } from 'react'
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib'
import 'react-jigsaw-puzzle/lib/jigsaw-puzzle.css'
import './puzzle.css'
import cactus from '../Assets/puzzle.jpg'

export default function Puzzle() {
    const [text, setText] = useState("Unpuzzle the pieces🌵");

    const set = () => {
        setText("Congratulations!");
    };
    return (
        <div>
            <h2 className="tag">{text}</h2>
            <JigsawPuzzle
                imageSrc={cactus}
                rows={3}
                columns={3}
                onSolved={set}
                className="jigsaw-puzzle"
            />
        </div>
    )
}