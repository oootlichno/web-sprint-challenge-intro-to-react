import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

export default function App() {
  const [characters, setCharacters] = useState([]) 
  const [currentCharacter, setCurrentCharacter] = useState('1')

  const [planets, setPlanets] = useState([]) 



  useEffect(() => {
    axios.get(urlPeople)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    axios.get(urlPlanets)
      .then(res => {
        setPlanets(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
    
      {
        characters.map(ch => {
          const homeworldName = planets.find(pl => pl.id === ch.homeworld)?.name || 'Unknown' 
          return (
            <Character
              key={ch.id}
              name={ch.name}
              homeworld={homeworldName}
            />
          )
        })
      }
    </div>
  )
}



// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
