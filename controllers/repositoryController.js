const repo = require("../models/repositories");

exports.CreateRepository = (req, res) => {
  const { name, descripcion } = req.body;
  const Newrepo = new repo(req.body);
  Newrepo.save((error, Newrepo) => {
    if (error) {
      return res.status(400).json({ error: "we have a problem" });
    }
    if (Newrepo) {
      return res.status(200).json({ message: Newrepo });
    }
  });
};

exports.GetRepository = (req, res) => {
  const { name } = req.body;

  repo.findOne({ name }, (error, respository) => {
    if (error || !respository) {
      return res.status(400).json({ error: "Reposotory not existed" });
    }

    return res.json({ message: respository });
  });
};
