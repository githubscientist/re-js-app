import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Ide from "./pages/Ide";

// create a router object
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/ide",
    element: <Ide />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;