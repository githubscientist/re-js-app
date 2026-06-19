import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HomeWrapper from "./wrappers/HomeWrapper";
import DashboardWrapper from "./wrappers/DashboardWrapper";
import Todos from "./components/Todos";
import Stats from "./components/Stats";
import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";
import UpdateTodo from "./components/UpdateTodo";

// create a router object
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeWrapper />,
    children: [
      {
        path: "",
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
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardWrapper />,
    children: [
      {
        path: "",
        element: <Stats />
      },
      {
        path: "todos",
        element: <Todos />
      },
      {
        path: "todos/new",
        element: <NewTodo />
      },
      {
        path: "todo/:id",
        element: <Todo />
      },
      {
        path: "todo/:id/edit",
        element: <UpdateTodo />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />
}

export default App;