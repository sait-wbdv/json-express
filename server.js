const path = require('path');
const express = require('express');
const cors = require('cors');
const definitions = require('./definitions');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v0/definitions', function(request, response){
  response.json(definitions);
})

app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});