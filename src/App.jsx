import { useEffect, useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);

  // useEffect: without dependencies argument
  // runs whenever the component is mounted
  // run whenever the component gets updated
  // lifecycle methods: componentDidMount() + componentDidUpdate()
  useEffect(() => {
    console.log('component is mounted/updated');
  });

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