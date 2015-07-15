express     = require('express')
router      = express.Router()
homePage    = require('./routers/home_page')

router.use "/home", homePage

router.all "*", (req, resp) ->
  resp.status(404).json message: "Not found"

module.exports = router