import { Outlet } from "react-router";

const HomeWrapper = () => {
  return (
    <div>
        <h1>Todo App</h1>
        <p>Welcome to the Todo App! This application allows you to manage your tasks efficiently. You can add new tasks, mark them as completed, and delete them when they're no longer needed. Stay organized and keep track of your to-dos with ease!</p>
          
        <Outlet />
    </div>
  )
}

export default HomeWrapper;