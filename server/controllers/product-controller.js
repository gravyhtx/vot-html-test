const { Product } = require('../models');

module.exports = {
  async createProduct({ body }, res) {
    // console.log(body)
    const product = await Product.create(
      {
        product_name: body.title,
        product_path: body.filename,
        product_description: "default description",
        product_colors: body.colors,
        product_genders: body.gender,
        product_sizes: body.sizes
      }
    );

    if(!product) return res.status(400).json({ message: 'Something is wrong!' })
    res.json(product)
  }
}