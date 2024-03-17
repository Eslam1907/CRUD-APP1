import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = () => {
    fetch("http://localhost:7000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  const deleteProduct = (product) => {
    Swal.fire({
      title: `are you sure delete ${product.title}`,
      showCancelButton: true,
    }).then((data) => {
      console.log(data);
      if (data.isConfirmed) {
        
        fetch(`http://localhost:7000/products/${product.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            getAllProducts();
          });
      }
    });
  };
  return (
    <>
      <Link to="/products/add" className="btn btn-success mt-5">
        Add new product
      </Link>
      <table className="table table-striped table-hover mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-danger "
                    onClick={() => deleteProduct(product)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info "
                  >
                    View
                  </Link>
                  <Link
                    to={`/products/${product.id}/edit`}
                    className="btn btn-primary "
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default Products;
