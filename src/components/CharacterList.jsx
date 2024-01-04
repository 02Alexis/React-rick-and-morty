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
    <div className="container bg-danger">
      <div className="row">
        {characters.map((character) => {
          return (
            <div key={character.id} className="col-md-4">
              <Character character={character} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CharacterList;
