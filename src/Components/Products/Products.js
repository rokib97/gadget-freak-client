import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../Firebase/Firebase.init";

const Products = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleOrder = (product) => {
    console.log(product, user.email);
    const { name, price } = product;
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        email: user.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        toast(data.success);
      });
  };
  return (
    <div>
      <h2 className="text-center">Total Products: {products.length}</h2>
      <div className="row">
        <ToastContainer />
        {products.map((pd) => (
          <div className="col-4" key={pd._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{pd.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{pd.price}</h6>
                <button
                  className="btn btn-link"
                  onClick={() => handleOrder(pd)}
                >
                  Order now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
