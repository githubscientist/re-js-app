const App = () => {

  const menuItems = [
    'Home',
    'Register',
    'Login',
  ];

  // jsx
  return (
    <>
      <h1>GUVI-REACT</h1>
      <ul>
        {
          menuItems
            .map((value, index) => {
              return <li key={index}><a href="#">{ value }</a></li>
            })
        }
      </ul>
    </>
  )
}

export default App;