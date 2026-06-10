import { Component } from "react";
import NavBar from "./NavBar";

class Header extends Component {

  render() {
    // console.log(this.props);

    return (
      <div>
        <h1>Guvi - React</h1>
        <NavBar />
        <p>Welcome { this.props.user.email }! <button>Logout</button></p>
      </div>
    )
  }
}

export default Header;