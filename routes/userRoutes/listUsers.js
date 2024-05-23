const data = require("../../data");

module.exports = (req, res) => {
  const users = data.getUsers();
  if (users.length) {
    res.writeHead(200);
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({message: "No users found"}));
  }
};