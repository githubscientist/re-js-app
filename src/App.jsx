import React from "react";
import Child from "./components/Child";

class App extends React.Component {

  render() {
    let name = 'Peter';
    let age = 10;

    return (
      <>
        <Child
          name={name}
          age={age}
        />
      </>
    )
  }
}

export default App;