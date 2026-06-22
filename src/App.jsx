import { useDispatch, useSelector } from "react-redux";
import { doLikes, likeSelector } from "./redux/features/likeSlice";

const App = () => {

  // select the data from the redux store
  // we use useSelector hook to select the data
  const likes = useSelector(likeSelector);

  // we need dispatch function to dispatch an action
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Likes: { likes }</h1>
      <button onClick={() => dispatch(doLikes())}>Like</button>
    </div>
  )
}

export default App;