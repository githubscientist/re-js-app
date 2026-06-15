import { useEffect, useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // useEffect: with dependencies argument and with dependencies list
  // runs whenever the component is mounted
  // runs whenever the state/props provided as dependencies changes/updates
  // lifecycle methods: componentDidMount() + componentDidUpdate() --modified
  useEffect(() => {
    console.log('component is mounted and whenever likes state changes');
  }, [likes]);

  const handleLike = () => {
    // this gets executed when the like button is clicked
    // update the state -> likes
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>

      <h2>Dislikes: {dislikes}</h2>
      <button onClick={() => setDislikes(dislikes + 1)}>Dislike</button>
    </div>
  )
}

export default App;