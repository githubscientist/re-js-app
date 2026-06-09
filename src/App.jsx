import Child from "./components/Child";

const App = () => {

  // 1. create a callback function
  function callback(data) {
    console.log('callback called!');
    console.log(data);
  }

  return (
    // 2. pass the callback reference as an attribute to the component
    <>
      <Child callback={callback} />
    </>
  )
}

export default App;