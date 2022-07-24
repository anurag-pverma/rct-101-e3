import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const navigate = useNavigate()
  const {isAuth, logout}= useContext(AuthContext);
  const handleLogin=()=>{
    if(isAuth){
      logout();
    }
    else{
      navigate("/login")
    }
  }



  return (
    <div data-cy="navbar" style={{ 
      display: "flex",
      margin: "auto",
      justifyContent:"space-between",
      marginBottom:"100px"
    }}>
      <Link  to="/login" data-cy="navbar-home-link">Logo</Link>
      
      <span style={{marginLeft:"1100px"}} data-cy="navbar-cart-items-count">{/* count here */} Cart:</span>
      <button style={{paddingRight:"10px"}} data-cy="navbar-login-logout-button" onClick={handleLogin}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar; 
