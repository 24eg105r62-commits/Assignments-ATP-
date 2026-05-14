/**
 * Purpose: Processes financial transactions using array operations.
 * Key Variables:
 * - transactions: Array of credit/debit objects.
 * Logic Flow:
 * - Filters for credit types.
 * - Maps to extract numeric amounts.
 * - Calculates the total sum using reduce.
 * - Finds first debit and a specific amount's index.
 */
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 },
];

// 1. filter() all credit transactions
let credits = transactions.filter((t) => t.type === "credit");
console.log("Credit Transactions:", credits);

// 2. map() to extract only transaction amounts
let amounts = transactions.map((t) => t.amount);
console.log("Transaction Amounts:", amounts);

// 3. reduce() to calculate total amount (as per code logic, treats all as positive)
let totalAmount = transactions.reduce((acc, t) => acc + t.amount, 0);
console.log("Total Amount:", totalAmount);

// 4. find() the first debit transaction
let firstDebit = transactions.find((t) => t.type === "debit");
console.log("First Debit:", firstDebit);

// 5. findIndex() of transaction with amount 10000
let index10k = transactions.findIndex((t) => t.amount === 10000);
console.log("Index of 10k transaction:", index10k);
