import React from 'react';
import SinglePet from './SinglePet';
import Axios from 'axios';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets }) {
  const [shownPets, setShownPets] = React.useState(pets);

  const showPets = function (e) {
    let choice = e.target.value;
    let newPets = pets;
    if (choice !== 'all') {
      newPets = newPets.filter((pet) => pet.species == choice);
    }
    setShownPets(newPets);
  };

  const deletePet = async (id) => {
    await Axios.delete(`/api/pets/${id}`);
    const activePets = shownPets;
    setShownPets(activePets);
  };

  return (
    <>
      <select id="filters" onChange={showPets}>
        <option value="all">All</option>
        <option value="dog">Dogs</option>
        <option value="cat">Cats</option>
      </select>
      <div className="pet-list">
        {shownPets.map((pet) => {
          return <SinglePet deletePet={deletePet} key={pet.id} pet={pet} />;
        })}
      </div>
    </>
  );
}

export default PetList;
