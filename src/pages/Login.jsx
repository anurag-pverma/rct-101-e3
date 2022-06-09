import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {login}= useContext(AuthContext);
  const [longInCreds , setLoginCred] = useState({})
  const handleChange=(e)=>{
      const {name, value}= e.target;
      setLoginCred({
          ...longInCreds,
          [name]:value,
      }) 
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    //TODO --> INCOMPLETE
    login();
}
 

  return (
    <>
    {/* <Navbar/> */}
    <div >
      <p>Login</p>
      <input type="email" placeholder='enter email' name="email" id="email"  data-cy="login-email" onCanPlay={handleChange}  /><br />
      <input type="password" placeholder='enter password' name="password" id="password" data-cy="login-password" onChange={handleChange} /> <br />
      <button style={{width:"170px"}} type="submit" data-cy="login-submit" onClick={handleSubmit}>Login</button>
    </div>
    </>
  );
};

export default Login;
