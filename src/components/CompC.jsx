import { useLikes } from "./Likes";

const CompC = () => {

    // 3. Use the context to get the data
    // custom hook
    const { likes, setLikes } = useLikes();

  return (
    <div>
        <h1>Likes: { likes }</h1>
        <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  )
}

export default CompC;