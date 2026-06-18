import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        alert('Registration Successful!');
        navigate('/login');
    }

  return (
    <div>
          <h1>Register</h1> 
          <form onSubmit={handleRegister}>
              <input
                  type="text"
                  placeholder="Name..."
              /> &nbsp;

              <input
                  type="email"
                  placeholder="Email..."
              /> &nbsp;

              <input
                  type="password"
                  placeholder="Password..."
              /> &nbsp;

              <button type="submit">Register</button>
          </form>
    </div>
  )
}

export default Register;