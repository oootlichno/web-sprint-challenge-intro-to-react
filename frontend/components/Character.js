
import React, { useState } from 'react'
import styled from 'styled-components'

const CharacterContainer = styled.div`
  margin: 1.2rem;
  padding: 1.2rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  cursor: pointer;

  span {
    color: rgb(0, 0, 0);
  }
`

export default function Character({ name, homeworld }) {
  const [showHomeworld, setShowHomeworld] = useState(false) 

  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }

  return (
    <CharacterContainer className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{name}</h3>
      {showHomeworld && <p>Planet: <span className="character-planet">{homeworld}</span></p>}
    </CharacterContainer>
  )
}

