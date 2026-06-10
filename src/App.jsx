import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setLikes(likes - 1);
  }

  return (
    <>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button> &nbsp;
      <button onClick={handleDislike}>Dislike</button>
    </>
  )
}

export default App;