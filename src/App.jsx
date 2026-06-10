import { useState } from "react";

const App = () => {

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [history, setHistory] = useState([]);

  // [L, D, L, D, D, L, L, L]

  const handleLike = () => {
    setLikes(likes + 1);
    // history.push('L');
    setHistory([
      ...history,
      'L'
    ]);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    // history.push('D');
    setHistory([
      ...history,
      'D'
    ]);
  }

  console.log(history);

  return (
    <>
      <button onClick={handleLike}>Like { likes }</button> &nbsp;
      <button onClick={handleDislike}>Dislike {dislikes}</button>
      <p><strong>History of Clicks:</strong> { history.join(', ') }</p>
    </>
  )
}

export default App;