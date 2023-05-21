import axios from "axios";
import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function EditCactus() {
  const [cactus, setCactus] = useState({
    name: "",
    image: "",
    scientific_name: "",
    origin: "",
    life_expectancy: "",
    flowers: false,
    max_height: "",
    fun_fact: "",
    care_instructions: "",
    edible: false
  })

  const { id } = useParams()
  const navigate = useNavigate()

  const updateCactus = (cactusToUpdate) => {
    axios.put(`${API}/cacti/${id}`, cactusToUpdate)
      .then(() => navigate(`/cacti/${id}`))
      .catch((e) => console.warn(e))
  }

  const handleTextChange = (event) => {
    setCactus({ ...cactus, [event.target.id]: event.target.value });
  }

  const handleCheckboxChange = () => {
    setCactus({ ...cactus, flowers: !cactus.flowers });
    setCactus({ ...cactus, edible: !cactus.edible });
  }

  useEffect(() => {
    axios.get(`${API}/cacti/${id}`)
      .then((res) => setCactus(res.data))
  }, [id])

  const handleSubmit = (event) => {
    event.preventDefault();
    updateCactus(cactus);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Cactus Name:</label>
        <input
          id="name"
          value={cactus.name}
          type="text"
          onChange={handleTextChange}
          placeholder="cactus"
          required
        />
        <label htmlFor="url">Image URL:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={cactus.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="scientific_name">Scientific Name:</label>
        <input
          id="scientific_name"
          value={cactus.scientific_name}
          type="text"
          onChange={handleTextChange}
          placeholder="scientific name"
          required
        />
        <label htmlFor="origin">Origin:</label>
        <input
          id="origin"
          value={cactus.origin}
          type="text"
          onChange={handleTextChange}
          placeholder="South Africa"
          required
        />
        <label htmlFor="life_expectancy">Lifespan:</label>
        <input
          id="life_expectancy"
          value={cactus.life_expectancy}
          type="text"
          onChange={handleTextChange}
          placeholder="100"
          required
        />
        <label htmlFor="flowers">Flowers:</label>
        <input
          id="flowers"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={cactus.flowers}
        />
        <label htmlFor="max_height">Max Height:</label>
        <input
          id="max_height"
          value={cactus.max_height}
          type="text"
          onChange={handleTextChange}
          placeholder="4 feet"
          required
        />
        <label htmlFor="fun_fact">Fun Fact:</label>
        <input
          id="fun_fact"
          value={cactus.fun_fact}
          type="text"
          onChange={handleTextChange}
          placeholder="They're super..."
        />
        <label htmlFor="care_instructions">Care Instructions:</label>
        <input
          id="care_instructions"
          value={cactus.care_instructions}
          type="text"
          onChange={handleTextChange}
          placeholder="Water..."
        />
        <label htmlFor="edible">Edible:</label>
        <input
          id="edible"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={cactus.edible}
        />
        <input type="submit" className='submit' />
      </form>
      <Link to={`/cacti/${id}`}><button>Oops, nvm!</button></Link>
    </div>
  )
}
