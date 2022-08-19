import React from 'react';

function SinglePet({ pet }) {
  const [adopted, setAdopted] = React.useState(false);

  function returnClass() {
    return adopted ? 'single-pet adopted' : 'single-pet';
  }

  return (
    <div className={returnClass()}>
      <h1>{pet.name}</h1>
      <p>{pet.species}</p>
      <p>{pet.description}</p>
      <hr></hr>
      <p>{adopted ? 'Adopted!' : 'Available'}</p>
      <button
        onClick={() => {
          setAdopted(!adopted);
        }}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default SinglePet;
