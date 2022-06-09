import React, { useContext } from "react";
import Products from "../components/Products/Products";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";


const Home = () => {
  const {isAuth}= useContext(AuthContext);
  if(isAuth){
    return <div><Products/></div>
  }
  return <div>{/* Code here */}
     <Navigate to="/login"/> 
  </div>;
};

export default Home;
