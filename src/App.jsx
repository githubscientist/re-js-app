import axios from "axios";

const App = () => {

  // make an api call
  // using Fetch API

  // Make the request
  axios
    .get('https://api.dictionaryapi.dev/api/v2/entries/en/tree')
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log('API Call Failed!');
      console.log(error);
    })
  
  return (
    <div>App</div>
  )
}

export default App;