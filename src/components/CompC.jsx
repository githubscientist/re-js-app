import { useContext } from "react";
import { LikesContext } from "./Likes";

const CompC = () => {

    // 3. Use the context to get the data
    const { likes, setLikes } = useContext(LikesContext);

  return (
    <div>
        <h1>Likes: { likes }</h1>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  )
}

export default CompC;