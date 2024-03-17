
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navBar';
import Sidebar from './component/sidebar';
import Home from './component/pages/home';
import Products from './component/pages/products';
import Addproduct from './component/pages/Addproduct';
import Showdetails from './component/showdetails';
import Editproduct from './component/pages/editProduct';
import Categories from './component/pages/categories';


function App() {
  return (

    <div className="App">
<Navbar />
    <div className='row'>
    <div className='col-2 sidebar'>
    <Sidebar />
    </div>

    <div className='col-10'>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='products' element={<Products />} />
      <Route path='products/add' element={<Addproduct />} />
      <Route path='products/:productId' element={<Showdetails />} />
      <Route path='products/:productId/edit' element={<Editproduct />} />
      <Route path='products/categories' element={<Categories />} />

    </Routes>
    </div>
    </div>
   
    </div>
  );
}

export default App;
