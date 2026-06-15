import { useEffect, useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);

  // useEffect: with dependencies argument but without any dependencies
  // runs whenever the component is mounted
  // lifecycle methods: componentDidMount()
  useEffect(() => {
    console.log('component is mounted');
  }, []);

  const handleLike = () => {
    // this gets executed when the like button is clicked
    // update the state -> likes
    setLikes(likes + 1);
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;