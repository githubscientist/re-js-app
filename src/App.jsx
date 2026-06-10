import { useState } from "react";

const App = () => {

  // state management -> introducing state into components
  // useState hook -> using this hook, we can bring state managment feature
  // to the functional component
  // hooks are functions
  // useState()

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    // update the state likes
    // always take the current value of likes state
    // and update it to plus 1 value
    setLikes(likes + 1);
  }

  return (
    <>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </>
  )
}

export default App;