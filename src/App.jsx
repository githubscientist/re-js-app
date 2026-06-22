import { useDispatch, useSelector } from "react-redux";
import { doDislikes, doLikes, likeSelector } from "./redux/features/likeSlice";

const App = () => {

  // select the data from the redux store
  // we use useSelector hook to select the data
  const likes = useSelector(likeSelector);

  // we need dispatch function to dispatch an action
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(doLikes());
  };

  const handleDislike = () => {
    dispatch(doDislikes());
  }

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
      &nbsp;
      <button onClick={handleDislike}>Dislike</button>
    </div>
  )
}

export default App;