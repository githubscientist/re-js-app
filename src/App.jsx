import { createContext, useState } from "react";
import CompA from "./components/CompA";

// 1. Create a context and export the context
// so that it will be available for all the components
export const LikesContext = createContext();

const App = () => {

  // let's say we have the data likes in App component
  const [likes, setLikes] = useState(0);

  // 2. Add the state to the context and 
  // provide the context to the entire application
  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
      <div>
        <CompA />
      </div>
    </LikesContext.Provider>
  )
}

export default App;