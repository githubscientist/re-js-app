// Header Component
function Header(props) {

  return (
    <>
      <p>Welcome { props.loggedInUser.name   }! <button>logout</button></p>
    </>
  )
}

export default Header;