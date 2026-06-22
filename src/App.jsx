import { useState } from "react";

const App = () => {

  // add a state to handle the likes
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    // setLikes((prev) => prev + 1);
    setLikes(likes + 1);
  };

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;