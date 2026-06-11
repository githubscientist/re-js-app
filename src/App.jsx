import MenuItem from "./components/MenuItem";

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
              return <MenuItem
                key={index}
                value={value}
              />
            })
        }
      </ul>
    </>
  )
}

export default App;