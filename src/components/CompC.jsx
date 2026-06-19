const CompC = ({ likes, setLikes }) => {
  return (
    <div>
          <h1>Likes: {likes}</h1>
          <button onClick={() => setLikes(likes + 1)}>Like</button>
    </div>
  )
}

export default CompC;