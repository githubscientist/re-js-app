const App = () => {

  // make an api call
  // using Fetch API

  // Make the request
  fetch('https://api.dictionaryapi.dev/api/v2/entries/en/tree', {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
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