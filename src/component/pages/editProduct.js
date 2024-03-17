import axios from "axios";
import {  useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

function Editproduct (){
   const [titlee, setTitlee] = useState("");
   const [pricee, setPricee] = useState(0);
   const [ide, setIde] = useState(0);
 const {productId} = useParams()
 console.log(productId);
   const navigate = useNavigate();
 
   const prevent = (e) => {
     e.preventDefault();
 axios
    .put(`http://localhost:7000/products/${productId}`, {
      id : ide,
      title:titlee,
      price:pricee
    })
    .then((data) => {
        console.log(data);
      navigate("/products");
    });
   };

    return (
        <>
  <form onSubmit={prevent}>
      <div className="mb-3">
          <label htmlFor="exampleInputIDproduct1" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputIDproduct1"
            placeholder="Enter the Id"
            aria-describedby="addproductid"
            onChange={(e) => setIde(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputproduct1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputproduct1"
            placeholder="Enter the title"
            aria-describedby="addproducttitle"
            onChange={(e) => setTitlee(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputproductprice1" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputproductprice1"
            placeholder="Enter the price"
            aria-describedby="addproductprice"
            onChange={(e) => setPricee(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
    )
}
// function Editproduct (){
//   return(
//     <></>
//   )
// }
 export default Editproduct