import MenuItem from "./components/MenuItem";
import './App.css';

const App = () => {

  const menuItems = [
    'Home',
    'Register',
    'Login',
  ];


  // jsx
  return (
    <div className="container">
      <div className="navHeader">
        <div>
          <h3>GUVI-REACT</h3>
        </div>
        <div>
          <ul className="menuList">
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
        </div>
      </div>
      <hr />
    </div>
  )
}

export default App;