import { Component } from 'react';

class Child extends Component {
    render() {

    return (
        <>
            <h1>Greetings!</h1>
            <p>Hello {this.props.name}, Your age is {this.props.age}!!</p>
        </>
    )
  }
}

export default Child;