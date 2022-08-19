import React from 'react';
import PetList from './components/PetList';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import pets from './petdata';

const App = () => {
  return (
    <div>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </div>
  );
};

export default App;
