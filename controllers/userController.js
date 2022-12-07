const userScheme = require("../models/user");

exports.createUser = async (req, res) => {
  const { name, lastname, email } = req.body;

  console.log(email);
  const user = new userScheme(req.body);
  user.save((error, user) => {
    if (error) {
      return res.status(400).json({ error: "Hubo un error en esta parte" });
    }
    if (user) {
      return res.status(200).json({ message: user });
    }
  });
};

exports.GetUser = (req, res) => {
  const { name, email } = req.body;
  userScheme.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({ error: "Email Inexistente" });
    }

    return res.json({ message: "Login" });
  });
};
