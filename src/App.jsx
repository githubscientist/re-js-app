import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [wordDefinitions, setWordDefinitions] = useState([]);

  useEffect(() => {
    // Make the request
    axios
      .get('https://api.dictionaryapi.dev/api/v2/entries/en/tree')
      .then((response) => {
        setWordDefinitions(response.data);
      })
      .catch((error) => {
        console.log('API Call Failed!');
        console.log(error);
      })
  }, []);
  
  console.log(wordDefinitions);
  
  return (
    <div>App</div>
  )
}

export default App;