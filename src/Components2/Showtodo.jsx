import React from "react";

function Showtodo(props) {
  return <div style={{display:"flex",
  textAlign:"center",
  marginLeft:"200px",
  border:"1px solid grey",
  width:"200px"
  
  }}>

    <div>
        <h3>{props.mytask}</h3>

    </div>
    <div>
        <button onClick={
            ()=>{props.onSelect(props.id)}
        }>X</button>
    </div>

  </div>;
}

export default Showtodo;
