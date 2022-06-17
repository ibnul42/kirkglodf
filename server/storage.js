const { isArray } = require("util");

const fs = require("fs");

const storagePath = "./storage";
const usersPath = `${storagePath}/users.json`;

const initialUsers = {
  test: {
    username: "test",
    password: "12345",
  },
  ibnul: {
    username: "ibnul",
    password: "12345",
  },
};

const initStorage = () => {
  if (!fs.existsSync(storagePath)) fs.mkdirSync(storagePath);
  if (!fs.existsSync(usersPath)) setUsers(initialUsers);
};

const getUser = (username) => {
  return getUsers()[username];
};

const setUser = (user) => {
  const users = getUsers();
  users[user.username] = user;
  setUsers(users);
};

function getUsers() {
  let users;
  if (fs.existsSync(usersPath)) {
    users = JSON.parse(fs.readFileSync(usersPath).toString());
  }
  return users || {};
}

function setUsers(users) {
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
}
module.exports = {
  initStorage,
  getUser,
  setUser,
};
