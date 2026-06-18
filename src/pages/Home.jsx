import { useNavigate } from "react-router"

const Home = () => {

  const navigate = useNavigate();

  const handleRegister = () => {
    // window.location.href = '/register';
    navigate('/register');
  }

  const handleLogin = () => {
    navigate('/login');
  }

  return (
    <div>
      <h1>Todo App</h1>
      <p>Welcome to the Todo App! This application allows you to manage your tasks efficiently. You can add new tasks, mark them as completed, and delete them when they're no longer needed. Stay organized and keep track of your to-dos with ease!</p>

      <button onClick={handleRegister}>Register</button> &nbsp;
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Home;