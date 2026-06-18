import { Outlet, useNavigate } from "react-router"

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
      <div>
        <button onClick={handleRegister}>Register</button> &nbsp;
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default Home;