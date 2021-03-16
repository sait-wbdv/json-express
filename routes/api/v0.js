const express = require('express');
const router = express.Router();
const definitions = require('../../data/definitions.js')

router.get('/definitions', function(request, response){
  response.json(definitions);
});

module.exports = router