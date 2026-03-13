const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];

//Tasks:
//    1. filter() all credit transactions
let credit = transactions.filter((transac) => transac.type === "credit");
console.log(credit);
//    2. map() to extract only transaction amounts
let amounts = transactions.map((transac) => transac.amount);
console.log(amounts);
//    3. reduce() to calculate final account balance
let balance = transactions.reduce((acc, transac) => acc + transac.amount, 0);
console.log(balance);
//    4. find() the first debit transaction
let debits = transactions.find((transac) => transac.type === "debit");
console.log(debits);
//   5. findIndex() of transaction with amount 10000
let amountis = transactions.findIndex((transac) => transac.amount === 10000);
console.log(amountis);
