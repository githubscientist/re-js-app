import { useReducer, useState } from "react";

const reducer = (state, action) => {
  // using action object,
  // conditionally return the new state
  if (action.type === 'LIKE') {
    return state + 1;
  } else if (action.type === 'DISLIKE') {
    return state - 1;
  } else if (action.type === 'RESET') {
    return 0;
  }

  // always returns the current state
  // when none of the action type matches the event
  return state;
}

const App = () => {

  const [likes, setLikes] = useReducer(reducer, 0);

  const handleLike = () => {
    setLikes({ type: 'LIKE' });
  }

  const handleDislike = () => {
    setLikes({ type: 'DISLIKE' });
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button> &nbsp;
      <button onClick={handleDislike}>Dislike</button>  &nbsp;
      <button onClick={() => setLikes({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default App;