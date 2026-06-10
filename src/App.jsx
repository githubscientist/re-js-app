const App = () => {

  let likes = 0;

  const handleLike = () => {
    likes++; // likes = likes + 1
    console.log(likes);
  }

  return (
    <>
      <h1>Likes: { likes }</h1>
      <button onClick={handleLike}>Like</button>
    </>
  )
}

export default App;