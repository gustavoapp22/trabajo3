import axios from 'axios'
import { useState, useEffect } from 'react'
import Latam from './components/Latam';
import './App.css'
import rickmorty from "./assets/img/rickmorty.gif"

function App() {


  const [pokemones, setPokemones] = useState({});

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126)
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}/`)
      .then(res => setPokemones(res.data));

  }, []);

  //

  const [heads, setHeads] = useState("");

  const head = () => {

    axios.get(`https://rickandmortyapi.com/api/location/${heads}/`)
      .then(res => setPokemones(res.data));
  }




  console.log(pokemones)

  return (
    <div className="App">
      <div className='name2'>
        <img className='img' src={rickmorty} alt="" />
        <div className='name3'>
          <h1 className='texto__1'> Rick and Morty</h1>
          <input className='button'
            type="text"
            value={heads}
            onChange={(e) => setHeads(e.target.value)}


          />
          <button className='' onClick={head} >Buscar</button>

          <div className="hijo1">


            <h1 className='texto1'><b >Type:</b>{pokemones.type}</h1>
            <br />


          <h1 className='texto2'><b>Name:</b>{pokemones.name}</h1>
            <h2 className='texto2'><b>Population:</b>{pokemones.residents?.length}</h2>
          <h1 className='texto2'><b>Dimension:</b>{pokemones.dimension}</h1>
          </div>
          <ul className='red'>
            {pokemones.residents?.map((residents) => (

              <Latam
                xd={residents}
                key={residents}
              />

            ))}
          </ul>
        </div>
      </div>
    </div >
  )
}

export default App
