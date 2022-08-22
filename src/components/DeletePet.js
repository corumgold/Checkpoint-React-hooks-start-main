import React from 'react';

const DeletePet = ({ pet, deletePet }) => {
  return (
    <button
      onClick={() => {
        deletePet(pet.id);
      }}
      className="delete-pet"
    >
      <p>Delete Pet</p>
    </button>
  );
};

export default DeletePet;
