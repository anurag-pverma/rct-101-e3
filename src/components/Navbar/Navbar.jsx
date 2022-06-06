import React from "react";
import { Link } from "react-router-dom";

// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  return (
    <div data-cy="navbar" style={{ 
      display: "flex",
      margin: "auto",
      justifyContent:"space-between",
      marginBottom:"100px"
    }}>
      <Link  to="/login" data-cy="navbar-home-link">Logo</Link>
      <span style={{marginLeft:"1100px"}} data-cy="navbar-cart-items-count">{/* count here */} Cart:</span>
      <button style={{paddingRight:"10px"}} data-cy="navbar-login-logout-button">Logout</button>
    </div>
  );
};

export default Navbar;
