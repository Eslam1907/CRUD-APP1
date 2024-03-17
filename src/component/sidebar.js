import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to="/products">get all Product </Link>
        </li>

        <li>
          <Link to={"/products/categories"}>get all categories</Link>
        </li>
      </ul>
    </>
  );
}
export default Sidebar;
