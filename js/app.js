//--------------------------------------------------1-masala--------------------------------------------------------------------------------
const user = {
  name: "Ali",
  age: 25,
};

function getUserInfo(user) {
  console.log(`Foydalanuvchi ismi ${[user.name]}, yoshi: ${user.age}`);
}

getUserInfo();

function getUserInfo(user) {
  console.log(`Foydalanuvchi ismi ${user.name}, yoshi: ${user.age}`);
}

getUserInfo({ name: "Ali", age: 25 });
