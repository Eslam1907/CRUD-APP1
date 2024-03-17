import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pages/showdetails.css"

function Showdetails() {
const [product,setProduct]= useState([])
    const apiLink = "http://localhost:7000/products";
  let { productId } = useParams();
  useEffect(()=> {
    fetch(`${apiLink}/${productId}`).then((resp)=>resp.json())
    .then((product)=>setProduct(product))
  },[])
  console.log(product);
  return (
    <>
      <h2>{product.title}</h2>
      <img className="w-100" src={`${product.image}`} alt=""/>
      <hr/>
      <span>price: {product.price}$</span>
      <p>{product.description}</p>
    </>
  );
}
export default Showdetails;
