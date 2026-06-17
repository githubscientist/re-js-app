import { useState } from "react";

const App = () => {

  const [doRender, setDoRender] = useState(0);

  /*
    1. The value gets updated
    2. The value update/change does not cause re-rendering
    3. The value will not persist across re-renders
  */

  let likes = 0;

  const handleLike = () => {
    likes++;
    console.log(likes);
  }

  const handleReRender = () => {
    setDoRender(doRender + 1);
    console.log('Component re-rendered');
  }

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