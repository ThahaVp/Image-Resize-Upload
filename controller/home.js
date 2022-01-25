const path = require('path');

exports.homePage = (req, res) => {
  return res.sendFile(path.join(`${__dirname}/../views/index.html`));
};
