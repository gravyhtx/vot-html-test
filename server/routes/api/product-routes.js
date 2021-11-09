const router = require('express').Router();
const {
  createProduct
} = require('../../controllers/product-controller');

router.route('/').post(createProduct)

module.exports = router;