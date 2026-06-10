import { Component } from 'react';
import Header from './components/Header';

class App extends Component {

  render() {
    const user = {
      name: "Krish",
      email: "krish@guvi.in"
    }

    return (
      <div>
        <Header
          user={user}
        />
      </div>
    )
  }
}

export default App;