import { useEffect, useState } from "react";

const App = () => {

  const initialLikes = parseInt(localStorage.getItem('likes')) || 0;
  const [likes, setLikes] = useState(initialLikes);

  useEffect(() => {
    if (!localStorage.getItem('likes')) {
      localStorage.setItem('likes', String(0));
    }
  }, []);

  const handleLike = () => {
    setLikes(likes + 1);
    // should also update the localStorage
    localStorage.setItem('likes', (parseInt(localStorage.getItem('likes')) + 1).toString());
  }

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;