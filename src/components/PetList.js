import React from 'react';
import SinglePet from './SinglePet';

// const cody = {
//   id: 2,
//   name: 'Cody',
//   description: 'Adorable pug who loves to hug',
//   species: 'dog',
// };

const pets = [
  {
    id: 1,
    name: 'Rigatoni',
    description: 'A flaming hot cheetoh in feline form',
    species: 'cat',
  },
  {
    id: 2,
    name: 'Cody',
    description: 'Adorable pug who loves to hug',
    species: 'dog',
  },
  {
    id: 3,
    name: 'Frankie',
    description: 'The snuggliest kitty',
    species: 'cat',
  },
  {
    id: 4,
    name: 'Anabelle',
    description: 'Might eat your couch',
    species: 'dog',
  },
];

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList() {
  const [list, setList] = React.useState(pets);

  return (
    <div className="pet-list">
      {list.map((pet) => {
       return <SinglePet key={pet.id} data={pet} />;
      })}
    </div>
  );
}

export default PetList;
