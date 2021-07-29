const { default: axios } = require("axios");

const ERROR_MESSAGE = "We have problems to fetch the users, please try later.";

module.exports = {
  getUsers: async (req, res) => {
    let users = [];
    try {
      users = await axios.get("https://reqres.in/api/users");
    } catch (e) {
      return res.status(400).json(ERROR_MESSAGE);
    }
    return res.status(200).json(users);
  }
};
