import { Link, Outlet, useNavigate } from "react-router";

const DashboardWrapper = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        alert('logout successful!');

        navigate('/login');
    }

    const headerStyle = {
        textDecoration: "none",
        color: "black"
    }

  return (
    <div>
        <h1><Link to={"/dashboard"} style={headerStyle}>Dashboard</Link></h1>
          <p>Welcome {'Guest'}! <button onClick={handleLogout}>Logout</button> </p>  
          
          <ul>
            <li><Link to={"/dashboard/todos"}>Todos</Link></li>
            <li><Link to={"/dashboard/todos/new"}>New Todo</Link></li>  
          </ul>
        
        <Outlet />
    </div>
  )
}

export default DashboardWrapper;