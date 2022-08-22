import React from 'react';

const AddPet = ({ addPet }) => {
  return (
    <div className="pet-register">
      <h1>Register Pet</h1>
      <form onSubmit={addPet} id="add-pet">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="species">Species (dog or cat)</label>
        <input type="text" name="species" />
        <label htmlFor="description">Description</label>
        <input type="text" name="description" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddPet;
