import React from 'react';
import PetList from './components/PetList';
import Axios from 'axios';

const App = () => {
  const [petsData, setPetsData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const petFetch = async () => {
    setIsLoading(true);
    let response = await Axios.get('/api/pets').catch(function (error) {
      document.getElementById('title').innerHTML =
        'Could not find the furry friends! 🙀';
      console.log(
        error.response.data,
        error.response.status,
        error.response.headers
      );
    });
    setPetsData(response.data);
    setIsLoading(false);
    console.log('Page Rendered!');
  };

  React.useEffect(() => {
    petFetch();
  }, []);

  return (
    <div>
      <h1 id="title">
        {isLoading ? '🐶 Loading Furry Friends! 🐱' : 'Adoption Center'}
      </h1>
      {isLoading ? '' : <PetList pets={petsData} petFetch={petFetch} />}
    </div>
  );
};

export default App;
