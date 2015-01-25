var express = require('express');
var router = express.Router();

var home = require('./home.js');
var cv = require('./cv.js');
var portfolio = require('./portfolio.js');

router.get('/', home.index);
router.get('/cv', cv.index);
router.get('/portfolio', portfolio.index);
router.get('/portfolio/opentaxepub', portfolio.opentaxepub);

module.exports = router;
