const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const FileSchema = require("../models/file");

exports.createFile = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.maxFileSize = 50 * 1024 * 1024;
  form.parse(req, (err, fields, files) => {
    console.log(fields);
    console.log(files);
    if (err) return console.error(err);
    const { name, nameOwner, namerepository } = fields;
    let schemaFile = FileSchema(fields);
    if (files.file) {
      if (files.size > 2000000) {
        res.json({ status: "Big File" });
      }
      schemaFile.file.data = fs.readFileSync(files.file.filepath);
      schemaFile.file.contentType = files.file.mimetype;
    }
    schemaFile.save((err, result) => {
      if (err) {
        res.json({ status: "Algo paso" });
      }
      res.json(result);
    });
  });
};

exports.FindFile = (req, res) => {
  const { name } = req.body;

  FileSchema.findOne({ name }, (err, fileFound) => {
    if (err || !fileFound) {
      return res.json({ message: "There is a problem" });
    }

    return res.json({ message: fileFound });
  });
};

/*exports.GetFile = (req,res) =>{
  
  FileSchema.find()
}*/
