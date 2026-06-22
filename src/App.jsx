import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case 'LIKE':
      return state + 1;
  }

  // make sure to return the current state in all else situation
  return state;
}


const App = () => {

  // add a state to handle the likes
  const [likes, dispatch] = useReducer(reducer, 0);

  const handleLike = () => {
    dispatch({ type: 'LIKE' });
  };

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;