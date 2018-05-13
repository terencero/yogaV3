const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./controllers/api/yoga-controller');

const app = express();

// const routes = require();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.use('/dist',express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

// need to setup routes
app.use('/', routes);

// Listener
app.listen(PORT, function() {
  console.log('App is listening on PORT: ' + PORT);
});