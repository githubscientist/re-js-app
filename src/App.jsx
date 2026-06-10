import Header from "./components/Header";

const App = () => {
  
  // create a callback
  const liftUp = (user) => {
    console.log(user);
  }

  return (
    <div>
      <Header
        liftUp={liftUp}
      />
    </div>
  )
}

export default App;