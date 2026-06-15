import { Component } from 'react';
import './App.css';
import Card from './components/Card';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: 0,
      isHidden: false
    }
  }

  // life cycle methods
  componentDidMount() {
    // this method is called after the component is mounted to the DOM
    console.log('App: Component did mount');
  }

  componentDidUpdate(prevProps, prevState) {
    // this method is called after the component is updated or re-rendered
    console.log('App: Component did update');
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  handleHide = () => {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <div>
        <button className='showHideButton' onClick={this.handleHide}>
          {
            this.state.isHidden ? 'Show' : 'Hide'
          }
        </button>

        {
          !this.state.isHidden && (
            <Card
              likes={this.state.likes}
              handleLike={this.handleLike}
            />
          ) 
        }
      </div>
    )
  }
}

export default App;