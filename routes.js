var express = require('express');
var router = express.Router();

var home = require('./controllers/home.js');
var cv = require('./controllers/cv.js');
var portfolio = require('./controllers/portfolio.js');
var contact = require('./controllers/contact.js');
var about = require('./controllers/about.js');

router.get('/', home.index);

router.get('/cv', cv.index);

router.get('/portfolio', portfolio.index);
router.get('/portfolio/:project', portfolio.project);

router.get('/contact', contact.index);
router.post('/contact', contact.post);

router.get('/about', about.index);

module.exports = router;
