import React from 'react';
import SinglePet from './SinglePet';

const cody = {
  id: 2,
  name: 'Cody',
  description: 'Adorable pug who loves to hug',
  species: 'dog',
};

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList(props) {
  return (
    <div className="pet-list">
      {props.data.map((pet) => {
        return <SinglePet key={pet.id} data={pet} />;
      })}
    </div>
  );
}

export default PetList;
