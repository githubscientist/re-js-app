import C1 from "./components/C1";

const App = () => {
  
  let message = 'data from App';
  
  return (
    <>
      <C1
        message={message}
      />
    </>
  )
}

export default App;