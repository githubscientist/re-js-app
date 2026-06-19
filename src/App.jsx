import { useState } from "react";
import CompA from "./components/CompA";

const App = () => {

  // let's say we have the data likes in App component
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <CompA
        likes={likes}
        setLikes={setLikes}
      />
    </div>
  )
}

export default App;