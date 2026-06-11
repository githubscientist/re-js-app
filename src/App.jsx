const App = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log('logging in with...');
    console.log(e.target.email.value, e.target.password.value);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email..."
          name="email"
        />  
        &nbsp;
        <input
          type="password"
          placeholder="Password..."
          name="password"
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