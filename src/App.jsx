const App = () => {

  // make an api call
  // using XHR - XMLHttpRequest
  // 1. Initialize the XHR instance.
  const xhr = new XMLHttpRequest();

  // 2. Define the URL
  const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/tree';

  // 3. Open the Request
  xhr.open('GET', url);

  // 4. Attach Success and Error callbacks
  // this will trigger after the api call succeeds or fails
  xhr.onload = function () {
    console.log(xhr.responseText);
  }

  xhr.onerror = function () {
    console.log('API Call Failed!');
  }

  // 5. Send the Request
  xhr.send();


  return (
    <div>App</div>
  )
}

export default App;