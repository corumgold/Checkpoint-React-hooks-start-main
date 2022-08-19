import React from 'react';

function SinglePet(props) {
  const [adopted, setAdopted] = React.useState(false);

  function returnClass() {
    return adopted ? 'single-pet adopted' : 'single-pet';
  }

  return (
    <div className={returnClass()}>
      <h1>{props.data.name}</h1>
      <p>{props.data.species}</p>
      <p>{props.data.description}</p>
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
