import NavBar from "./NavBar";

const Header = ({ liftUp }) => {

  const user = {
    name: "Krish",
    email: "krish@guvi.in"
  }

  // call the callback defined in the App component
  liftUp(user);

  return (
    <div>
      <h1>Guvi - React</h1>
      <NavBar />
      <p>Welcome { user.email }! <button>Logout</button></p>
    </div>
  )
}

export default Header;