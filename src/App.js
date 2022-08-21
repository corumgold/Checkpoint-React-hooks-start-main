import React from 'react';
import PetList from './components/PetList';
import Axios from 'axios';

const App = () => {
  const [petsData, setPetsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const petFetch = async () => {
      setIsLoading(true);
      let response = await Axios.get('/api/pets');
      setPetsData(response.data);
      setIsLoading(false);
    };
    petFetch();
  }, []);

  return (
    <div>
      <h1>{isLoading ? 'Loading Furry Friends' : 'Adoption Center'}</h1>
      {isLoading ? <p>Loading Furry Friends</p> : <PetList pets={petsData} />}
    </div>
  );
};

export default App;
