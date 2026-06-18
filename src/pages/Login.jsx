import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        alert('login successful!');
        navigate('/dashboard');
    }

  return (
      <div>
          <h1>Login</h1>
        <form onSubmit={handleLogin}>
              <input
                  type="email"
                  placeholder="Email..."
              /> &nbsp;

              <input
                  type="password"
                  placeholder="Password..."
              /> &nbsp;

              <button type="submit">Login</button>
          </form>      
    </div>
  )
}

export default Login;