function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.orinalUrl);
  }
  next();
}

const compression = require('compression')
const express = require('express')

compression()

const app = express();

app.use(compression());
// app.use(requireHTTPS);
app.use(express.static('./dist/health-ag'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/health-ag/' })
}
);

//test

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is alive")
});
