const users = [];
let currentId = 1;

module.exports = {
  addUser: (user) => {
    user.id = currentId++;
    users.push(user);
  },
  
  getUsers: () => users,

  getUserById: (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      return users[userIndex];
    } else {
      return false;
    }
  },

  deleteUserById: (id) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      return users.splice(userIndex, 1);
    } else {
      return false;
    }
  },

  updateUserById: (id, args) => {
    const userIndex = users.findIndex(u => u.id === id);
    if (userIndex !== -1) {
      for (i in args) users[userIndex][i] = args[i];
      return users[userIndex];
    } else {
      return false;
    }
  }
};