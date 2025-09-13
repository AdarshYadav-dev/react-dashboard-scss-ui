import { useEffect, useState } from "react";
import "../styles/carts.scss";

function Carts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data))
      .catch((err) => console.error("Error fetching carts:", err));
  }, []);

  return (
    <div className="carts-page">
      <h2>All Carts</h2>
      <div className="carts-list">
        {carts.map((cart) => (
          <div key={cart.id} className="cart-card">
            <h3>Cart ID: {cart.id}</h3>
            <p>User ID: {cart.userId}</p>
            <p>Date: {cart.date}</p>
            <ul>
              {cart.products.map((p, index) => (
                <li key={index}>
                  Product ID: {p.productId} | Quantity: {p.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carts;
