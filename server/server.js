// __dirname points to the actual server (server)
// console.log(__dirname + '/../public');
// const path = require('path');
// const publicPath = path.join(__dirname, '../public');
// console.log(publicPath);

const express = require('express');

const path = require('path');

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));
// app.get((req, res) => {
//   res.sendFile(publicPath + 'index.html');
// });

app.listen(port, () => {
  console.log(`listen on port ${port}`)
});
