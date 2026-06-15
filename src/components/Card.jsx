import { Component } from 'react';
import './Card.css';

export class Card extends Component {

    constructor(props) {
        super(props);
    }

    // life cycle methods
    componentDidMount() {
        // this method is called after the component is mounted to the DOM
        console.log('Card: Component did mount');
    }

    componentDidUpdate(prevProps, prevState) {
        // this method is called after the component is updated or re-rendered
        console.log('Card: Component did update');
    }

    componentWillUnmount() {
        // this method is called before the component is unmounted and destroyed
        console.log('Card: Component will unmount');
    }

  render() {
    return (
      <div className='card'>
        <h1>Like: {this.props.likes}</h1>
        <button onClick={this.props.handleLike}>Like</button>
    </div>
    )
  }
}

export default Card;