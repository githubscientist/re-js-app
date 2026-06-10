import { Component } from "react";

class NavBar extends Component {
    render() {
      return (
        <div>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                
                <li>
                    <a href="">Dashboard</a>
                </li>

                <li>
                    <a href="">Posts</a>
                </li>
            </ul>      
        </div>
    )
  }
}

export default NavBar;