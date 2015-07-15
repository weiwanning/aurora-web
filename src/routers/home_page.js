var express = require('express');
var router = express.Router();

router.get('/', function(req, resp) {
	console.log('home page rendered');
  	resp.render('home_page.html');
});

module.exports = router
