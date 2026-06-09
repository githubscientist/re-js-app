import Child from "./components/Child";

const App = () => {

  let name = 'Krish';
  let age = 25;

  return (
    <>
      <Child
        name={name}
        age={age}
      />
    </>
  )
}

export default App;