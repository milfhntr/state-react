import axios from "axios"; 
import React, { useEffect, useState } from "react"; 
 
const Rick = () => { 
  const [characters, setCharacters] = useState([]); 
  const [selectedCharacter, setSelectedCharacter] = useState(null); 
 
  useEffect(() => { 
    async function fetchCharacters () { 
      try { 
        const responce = await axios.get( 
          "https://rickandmortyapi.com/api/character/" 
        ); 
        setCharacters(responce.data.results); 
      } catch (error) {} 
    } 
    fetchCharacters() 
  }, []); 
  const handleCharacterCLick = (character) => { 
    setSelectedCharacter(character); 
  }; 
  return ( 
    <div> 
      <h1>Rick And Morty</h1> 
      <ul> 
 
        {characters.map((character) => ( 
          <li 
            key={character.id} 
            onClick={() => handleCharacterCLick(character)} 
          > 
            {character.name} 
          </li> 
        ))} 
      </ul> 
      { 
        selectedCharacter &&  ( 
            <div> 
                <h2>name {selectedCharacter.name}</h2> 
                <img src={selectedCharacter.image} alt={selectedCharacter.name} /> 
                <p>status: {selectedCharacter.staus}</p> 
                <p>species: {selectedCharacter.species}</p> 
            </div> 
        ) 
      } 
    </div> 
  ); 
}; 
 
export default Rick;