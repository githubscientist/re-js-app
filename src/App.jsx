import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

// create a router object
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;