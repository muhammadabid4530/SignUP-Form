const uploadData=(req, res) => {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }
    res.status(200).send('File uploaded successfully.');
  }
  module.exports=uploadData;