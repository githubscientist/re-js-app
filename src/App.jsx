import Header from "./components/Header";

function App() {
  // logged in user details
  const loggedInUser = {
    name: 'Sathish',
    email: 'sathish@guvi.in'
  }

  return (
    <>
      <Header
        loggedInUser={loggedInUser}
      />
    </>
  ) 
}

export default App;