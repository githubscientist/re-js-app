import axios from "axios";
import { useEffect, useState } from "react";
import './App.css';

const App = () => {

  const [wordDefinitions, setWordDefinitions] = useState([]);
  const [inputWord, setInputWord] = useState("");

  const handleDictionaryFormSubmit = (e) => {
    e.preventDefault();

    // Make the request
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
      .then((response) => {
        setWordDefinitions(response.data);
      })
      .catch((error) => {
        console.log('API Call Failed!');
        console.log(error);
      })
  }
  
  return (
    <div className="container">
      <div className="formContainer">
        <form className="dictionaryForm" onSubmit={handleDictionaryFormSubmit}>
          <input
            className="wordInput"
            type="text"
            placeholder="Type a word to fetch the meaning..."
            value={inputWord}
            onChange={e => setInputWord(e.target.value)}
          />

          <button
            className="buttonGetMeaning"
            type="submit"
          >Get Meaning</button>
        </form>
      </div>

      <div className="meaningContainer">
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
                                meaning.definitions.map((definition, index) => (
                                  <li key={index}>{ definition.definition }</li>
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
              <p>Type a word to fetch the meaning...</p>
          )
        }
      </div>
    </div>
  )
}

export default App;