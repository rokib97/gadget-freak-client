import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import OrderList from "./Components/OrderList/OrderList";
import Products from "./Components/Products/Products";
import UploadProduct from "./Components/UploadProduct/UploadProduct";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route
          path="/uploadPd"
          element={<UploadProduct></UploadProduct>}
        ></Route>
        <Route path="/orders" element={<OrderList></OrderList>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
