const router = require('express').Router();
const {
  createUser,
  login,
  getSingleUser,
  updateUser
} = require('../../controllers/user-controller');

const { authMiddleware } = require('../../utils/auth');

router.route('/').post(createUser);

router.route('/login').post(login);

router.route('/single').get(getSingleUser);

router.route('/').put(authMiddleware, updateUser);

module.exports = router;