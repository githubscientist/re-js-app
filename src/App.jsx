import { useEffect, useState } from "react";

const App = () => {

  const [doRender, setDoRender] = useState(0);

  /*
    Ordinary Variable:

    1. The value gets updated
    2. The value update/change does not cause re-rendering
    3. The value will not persist across re-renders

    State Variable:
    1. The value gets updated
    2. The value update/change cause re-rendering
    3. The value will persist across re-renders
  */

  let [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleReRender = () => {
    setDoRender(doRender + 1);
    console.log('Component re-rendered');
  }

  useEffect(() => {
    console.log(likes);
  }, [likes]);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>

      &nbsp;
      <button onClick={handleReRender}>Render</button>
    </div>
  )
}

export default App;