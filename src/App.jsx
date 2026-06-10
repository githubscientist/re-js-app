import { useState } from "react";

const App = () => {

  const elements = ['tea', 'coffee', 'milk', 'milkshakes', 'icecream'];

  console.log(elements);

  return (
    <>
      <h1>Beverages:</h1>
      <ul>
        {
          elements.map((value) => {
            return <li>{ value.slice(0, 1).toUpperCase() + value.slice(1, ) }</li>;
          })
        }
      </ul>
    </>
  )
}

export default App;