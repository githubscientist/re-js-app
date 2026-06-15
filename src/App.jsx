import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0
    }
  }

  // life cycle methods
  componentDidMount() {
    // this method is called after the component is mounted to the DOM
    console.log('Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // this method is called after the component is updated or re-rendered
    console.log('Component did update');
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Like: {this.state.likes}</h1>
        <button onClick={this.handleLike}>Like</button>
      </div>
    )
  }
}

export default App;