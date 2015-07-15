express = require('express')
router = express.Router()

# GET draw page.
router.get '/', (req, resp) ->
  console.log "home page rendered"
  resp.render 'home_page.html'

module.exports = router
