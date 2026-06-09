import React from "react";

class App extends React.Component {

  render() {
    let name = 'Peter';
    let age = 10;

    return (
      <>
        <h1>Greetings!</h1>
        <p>Hello {name}, Your age is {age}!!</p>
      </>
    )
  }
}

export default App;