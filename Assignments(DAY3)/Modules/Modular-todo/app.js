import { arr, addtask, getalltasks, completetask } from "./task.js";
addtask("read", "HIGH", "2026 - 12 - 18");
console.log(getalltasks());
completetask("read");
console.log(arr);
