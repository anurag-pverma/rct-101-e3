import React, { useState , useEffect} from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";


const Product = () => {
  const [addCart, setAddCart] = useState(true);
  const [noOfProduct, setNoOfProduct] = useState(1)
  
  const product = { id: 1 };

  const [data, setData] = useState([]);
  // const params = useParams();

  // console.log(params);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/products`,
      method: "GET"
    })
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      // .catch((err) => {});
  },[]);

  // console.log(data);
  const handleAddCart=()=>{
    setAddCart(false);
  }
 



  return (
    <>
    <h1>Products</h1>
    <div style={{
      width:"100px",
        display:"grid",
        gridTemplateColumns:" repeat(4, 1fr) ",
        padding: "10px",
        margin: "100px"
        
    }}>

    {
      data&& data.map((product, index)=>{
        return (
          

          <div style={{ border:"1px solid black",
          borderRadius:"20px" ,
           height:"170px",
           width:"250px",
           margin: "5px"
          }} key={index} data-cy={`product-${product.id}`}>
          <h3 data-cy="product-name">{product.name}</h3>
          <h6 data-cy="product-description">{product.description}</h6>
          {
            addCart ? <button data-cy="product-add-item-to-cart-button"  onClick={handleAddCart(product.id)}> Add To Cart</button> 
                    : (
                      <div>
                      <button  data-cy="product-increment-cart-item-count-button" onClick={()=>setNoOfProduct(noOfProduct+1)} >+</button>
                      <span data-cy="product-count"> 
                        {
                          noOfProduct
                        }
                       </span>
                      <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setNoOfProduct(noOfProduct-1)}>-</button>
                      <button data-cy="product-remove-cart-item-button" >Remove From Cart</button>
                    </div>
                    )
          }
         
        </div>

)
})
}
  
</div>
    </>
  );
};

export default Product;
