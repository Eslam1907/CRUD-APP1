import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";


function Addproduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  
  const [id, setId] = useState(0);

  const navigate = useNavigate();

  const prevent = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:7000/products`, {
        id,
        title,
        price
      })
      .then((data) => {
        console.log(data);
        navigate("/products");
      });
  };
  return (
    <>
      <h2>ADD PRODUCT</h2>
      <form onSubmit={prevent}>
      <div className="mb-3">
          <label htmlFor="exampleInputIDproduct" className="form-label">
            ID
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputIDproduct"
            placeholder="Enter the Id"
            aria-describedby="addproductid"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputproduct" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputproduct"
            placeholder="Enter the title"
            aria-describedby="addproducttitle"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputproductprice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputproductprice"
            placeholder="Enter the price"
            aria-describedby="addproductprice"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Addproduct;
