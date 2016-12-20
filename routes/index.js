var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'robofolio',
    city: ['Dublin', 'Limerick', 'Galway'],
    showCity: true,
    partials: {
      header: "header",
      city: "city"
    }
  });
});

module.exports = router;
