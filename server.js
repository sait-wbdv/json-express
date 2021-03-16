const path = require('path');
const express = require('express');
const cors = require('cors');
const endpoints = require('./routes/api/v0');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v0',endpoints);

app.use(function(req, res, next) {
  res.sendStatus(404);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});