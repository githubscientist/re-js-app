import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('logging in with...');
    // console.log(e.target.email.value, e.target.password.value);
    console.log(email, password);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email..."
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />  
        &nbsp;
        <input
          type="password"
          placeholder="Password..."
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        &nbsp;
        <button
          type="submit"
        >Login</button>
      </form>
    </>
  )
}

export default App;