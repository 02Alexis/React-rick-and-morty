import React from "react";

function Character({ character }) {
  return (
    <div>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </div>
  );
}

export default Character;
