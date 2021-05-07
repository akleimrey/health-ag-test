const express = require('express')
const app = express();

app.use(requireHTTPS);
app.use(express.static(__dirname + '/dist/health-ag'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/health-ag/index.html'))
});

//test

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is alive")
});