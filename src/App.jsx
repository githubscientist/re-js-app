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
  
  // console.log(wordDefinitions[0].sourceUrls[0]);
  
  return (
    <>
      {
        wordDefinitions.length > 0 ? (
          <div>
            <h1>{wordDefinitions[0].word}</h1>
      
            <p>Dictionary</p>
            Definitions from <a href={wordDefinitions[0].sourceUrls.length > 0 ? wordDefinitions[0].sourceUrls[0] : '#'}>{'wiktionary.org'}</a> . <a href="">Learn More</a>
            
            <div>
              {
                wordDefinitions[0].meanings.length > 0 ? (
                  <div>
                    {
                      wordDefinitions[0].meanings
                      .map((meaning, index) => {
                        return <div key={index}>
                          <p>{meaning.partOfSpeech}</p>
                          
                          <ol>
                            {
                              meaning.definitions.map((definition) => (
                                <li>{ definition.definition }</li>
                              ))
                            }
                          </ol>
                        </div>
                      })
                    }
                  </div>
                ) : (
                    <p>No Meanings found...</p>
                )
              }
            </div>
          </div>
        ) : (
            <p>Fetching Meaning...</p>
        )
      }
    </>
  )
}

export default App;