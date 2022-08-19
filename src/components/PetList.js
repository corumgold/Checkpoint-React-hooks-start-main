import React from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets }) {
  const options = [
    { value: '', text: 'All' },
    { value: 'dog', text: 'Dogs' },
    { value: 'cat', text: 'Cats' },
  ];

  const [selected, setSelected] = React.useState(options[0]);
  const [shownPets, setShownPets] = React.useState(pets);
  const [change, setChange] = React.useState(false);

  React.useEffect(() => {
    console.log('Rerender page');
  }, [change]);

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  console.log(selected);

  return (
    <div>
      <div>
        <label htmlFor="species-select">Filter by species </label>
        <select value={selected} onChange={handleChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </div>
      <div className="pet-list">
        {shownPets.map((pet) => {
          switch (true) {
            case selected === pet.species:
              return <SinglePet key={pet.id} pet={pet} />;
            case !selected:
              return <SinglePet key={pet.id} pet={pet} />;
            case typeof selected === 'object':
              return <SinglePet key={pet.id} pet={pet} />;
            case selected !== pet.species:
              break;
          }
        })}
      </div>
    </div>
  );
}

export default PetList;
