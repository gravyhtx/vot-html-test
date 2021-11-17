const router = require('express').Router();
const {
  createUser,
  login,
  getSingleUser
} = require('../../controllers/user-controller');

router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/single').get(getSingleUser);

module.exports = router;