const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085,
    },
  },
  items: [{ product: "Laptop", price: 70000 }],
};

let order1 = structuredClone(order);
order1.customer.address.city = "chennai";
order1.items[0].price = 10000;
console.log(order);
console.log(order1);
//
