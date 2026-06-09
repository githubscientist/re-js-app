import React from "react";
import Child from "./components/Child";

class App extends React.Component {

  callback = (name, age) => {
    console.log('callback is executed!');
    console.log(name, age);
  }

  render() {
    return (
      <>
        <Child
          callback={this.callback}
        />
      </>
    )
  }
}

export default App;