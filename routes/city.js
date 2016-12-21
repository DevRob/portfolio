
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send([{name: "Limerick", population: 191809}, {name: "Galway", population: 79504}]);
});

module.exports = router;
