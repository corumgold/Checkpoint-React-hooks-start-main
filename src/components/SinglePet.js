import React from 'react';
import DeletePet from './DeletePet';

function SinglePet({ pet, deletePet }) {
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
      <button className='toggle'
        onClick={() => {
          setAdopted(!adopted);
        }}
      >
        Toggle Status
      </button>
      <DeletePet deletePet={deletePet} pet={pet} />
    </div>
  );
}

export default SinglePet;
