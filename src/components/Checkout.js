// src/components/Checkout.js
import React from 'react';

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle checkout logic
    alert('Order placed!');
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" required />
        </label>
        <label>
          Address:
          <input type="text" required />
        </label>
        <label>
          Payment Method:
          <select required>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
