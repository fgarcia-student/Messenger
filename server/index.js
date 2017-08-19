//main starting point of application
const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./router');

const app = express();

//db setup
mongoose.connect('mongodb://localhost/users', {useMongoClient: true});

//app setup--express
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

router(app);

//server setup--express talks to outside world
const port = process.env.PORT || 3001;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on:', port);
