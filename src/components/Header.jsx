import NavBar from "./NavBar";

const Header = ({ user }) => {

  return (
    <div>
      <h1>Guvi - React</h1>
      <NavBar />
      <p>Welcome { user.email }! <button>Logout</button></p>
    </div>
  )
}

export default Header;