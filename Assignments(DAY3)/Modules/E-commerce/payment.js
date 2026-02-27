import { reduceStock } from "./products.js";
import { getCartItems, getCartTotal, clearCart } from "./cart.js";

// TODO: Implement these functions

function processPayment(paymentMethod, couponCode = null) {
  let trolley = getCartItems();
  let trolley_total = getCartTotal(); // 2. Apply discount if coupon provided
  if (validatePaymentMethod(paymentMethod)) {
    console.log("Payment Processing");
    for (let stock in trolley) {
      console.log(reduceStock(stock.id, stock.quantity));
    }
  }
  console.log(clearCart());
  return;
  {
    orderId: generateOrderId();
    items: [...trolley];
    total: trolley_total;
    paymentMethod: paymentMethod;
    status1: "success/failed";
    message: "completeed shopping";
  }
}

function validatePaymentMethod(method) {
  if (method === "card" || method === "upi" || method === "cod") {
    return true;
  }
  return false;
}
function generateOrderId() {
  return "ORD" + Date.now();
}

export { processPayment, validatePaymentMethod, generateOrderId };
