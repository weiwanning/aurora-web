var express     = require('express');
var router      = express.Router();
var homePage    = require('./routers/home_page');

router.use('/home', homePage);

router.all('*', function(req, resp) {
  resp.status(404).json({
  	message: "Not found"
  });
});

module.exports = router