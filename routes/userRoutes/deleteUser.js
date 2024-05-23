const data = require("../../data");

module.exports = (req, res) => {
  const id = parseInt(req.url.split("/")[2]);
  const deletedUser = data.deleteUserById(id);
  if (deletedUser) {
    res.writeHead(200);
    res.end(JSON.stringify({message: "User successfully destroyed"}));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({message: "User not found"}));
  }
};