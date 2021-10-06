const router = require('express').Router();
const {
  createUser,
  getSingleUser
} = require('../../controllers/user-controller');

router.route('/').post(createUser);

router.route('/single').get(getSingleUser);

module.exports = router;