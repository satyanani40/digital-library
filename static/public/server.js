const express = require('express');
const app = express();
var path = require('path');
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;
const baseUrl = `http://localhost:${port}`;

app.use(express.static(path.join(__dirname + '/dist')));

app.set('view engine', 'html');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile('index.html');
});

app.get('*', (req, res) => {
  res.render('index', {
  req,
  res
});
});

app.listen(port, () => {
  console.log(`Listening at ${baseUrl}`);
});
