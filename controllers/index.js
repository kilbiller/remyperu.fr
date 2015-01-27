var express = require('express');
var router = express.Router();

var home = require('./home.js');
var cv = require('./cv.js');
var portfolio = require('./portfolio.js');
var contact = require('./contact.js');
var about = require('./about.js');

router.get('/', home.index);

router.get('/cv', cv.index);

router.get('/portfolio', portfolio.index);
router.get('/portfolio/opentaxepub', portfolio.opentaxepub);

router.get('/contact', contact.index);
router.post('/contact', contact.post);

router.get('/about', about.index);

module.exports = router;
