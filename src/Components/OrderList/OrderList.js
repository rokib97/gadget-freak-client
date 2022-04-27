import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const OrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [user] = useAuthState(auth);
  useEffect(() => {
    const url = `http://localhost:5000/orderList`;
    fetch(url, {
      headers: {
        authorization: `${user.email} ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
      });
  }, [user.email]);
  return (
    <div className="container">
      <h2>Total Order: {orderList.length}</h2>
      <ol>
        {orderList.map((order) => (
          <li key={order._id}>{order.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default OrderList;
