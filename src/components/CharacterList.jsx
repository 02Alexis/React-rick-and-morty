import { useState, useEffect } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    }

    getData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div key={character.id} className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
