import React from "react";

const RequiredAuth = ({ Children }) => {
  const {isAuth}= useContext(AuthContext)
  if(isAuth){
      return Children
  }
  else {

      return <Navigate to= "/login" />
  }
};

export default RequiredAuth;
