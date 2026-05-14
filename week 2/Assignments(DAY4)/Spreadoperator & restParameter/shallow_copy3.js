const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};
let user1 = { ...user };
user1.name = "Nithish";
user1.preferences.theme = "light";
console.log(user);
console.log(user1);
//
