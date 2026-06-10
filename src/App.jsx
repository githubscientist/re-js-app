import Header from "./components/Header";

const App = () => {

  // let's say we have some data in App component
  // like the currently logged in user information
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

export default App;