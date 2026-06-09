import Header from "./components/Header";

// Main Component
function App() {

  // let's say we have some data
  let name = 'krish';

  return (
    <>
      <h1>Hello { name.slice(0, 1).toUpperCase() + name.slice(1, ) }!</h1>
    </>
  )
}

export default App;