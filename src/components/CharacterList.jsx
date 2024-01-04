import { useState, useEffect } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    }

    getData();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return <Character key={character.id} character={character} />;
      })}
    </div>
  );
}

export default CharacterList;
