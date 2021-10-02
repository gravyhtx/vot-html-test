const router = require('express').Router();

router.get('/', (req,res) => {
  res.send('ayyy lmao')
})

module.exports = router;