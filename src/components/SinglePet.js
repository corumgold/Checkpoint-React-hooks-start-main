import React from 'react';

function SinglePet(props) {
  return (
    <div className={`single-pet`}>
      <h1>{props.data.name}</h1>
      <p>{props.data.species}</p>
      <p>{props.data.description}</p>
    </div>
  );
}

export default SinglePet;
