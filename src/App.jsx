// 1. install react-router

import { createBrowserRouter, RouterProvider } from "react-router";

// 2. create router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>HOME</h1>
  },
  {
    path: "/ide",
    element: <h1>GUVI IDE</h1>
  }
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;