import React from 'react';
import SinglePet from './SinglePet';
import Axios from 'axios';
import axios from 'axios';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets, petFetch }) {
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
    await Axios.delete(`/api/pets/${id}`).catch(function (error) {
      document.getElementById('title').innerHTML = 'Could not delete pet! 🙀';
      console.log(
        error.response.data,
        error.response.status,
        error.response.headers
      );
    });
    petFetch();
  };

  const addPet = async (e) => {
    e.preventDefault();
    const petName = e.target.name.value;
    const petSpecies = e.target.species.value;
    const petDescription = e.target.description.value;
    await axios.post('/api/pets', {
      name: petName,
      species: petSpecies,
      description: petDescription,
    });
    petFetch();
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
        <div className="pet-register">
          <h1>Register Pet</h1>
          <form onSubmit={addPet} id="add-pet">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <label htmlFor="species">Species</label>
            <input type="text" name="species" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PetList;
