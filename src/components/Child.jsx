import { Component } from 'react';

class Child extends Component {
    render() {

        let name = 'Peter';
        let age = 10;

        this.props.callback(name, age);

    return (
        <>
            <h1>Greetings!</h1>
        </>
    )
  }
}

export default Child;