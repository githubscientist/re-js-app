import { Component } from 'react';

export class App extends Component {
  // life cycle methods
  componentDidMount() {
    // this method is called after the component is mounted to the DOM
    console.log('Component did mount');
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    )
  }
}

export default App;