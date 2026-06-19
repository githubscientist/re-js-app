import { createContext, useContext, useState } from "react";

// 1. Create a context and export the context
// so that it will be available for all the components
export const LikesContext = createContext();

const Likes = ({ children }) => {
    // let's say we have the data likes in App component
    const [likes, setLikes] = useState(0);
    // add more states

  return (
    <LikesContext.Provider value={{ likes, setLikes }}>
        {
            children
        }
    </LikesContext.Provider>
  )
}

export function useLikes() {
    const context = useContext(LikesContext);

    return context;
}

export default Likes;