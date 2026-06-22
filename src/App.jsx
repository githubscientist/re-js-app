import { useDispatch, useSelector } from "react-redux";
import { doLikes, likesSelector } from "./redux/features/likeSlice";

const App = () => {

  // get the state from the redux
  const likes = useSelector(likesSelector);

  // create a dispatch object
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(doLikes());
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default App;