const express = require('express');
const app = express();
const imageRoutes = require('./routes/image');

app.use(express.urlencoded({ extended: true }));
app.use(imageRoutes);

let port = 3000;
app.listen(port, () => {
  console.log(`Running at server on:${port}`);
});
