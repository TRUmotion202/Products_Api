const router = require('express').Router()

const productsServices = require('./products.services')

router.route('/api/v1/products')
  .get(productsServices.getAllProducts)
  .post(productsServices.postNewProduct)

router.route('/api/v1/products/:id')
  .get(productsServices.getProductById)
  .patch(productsServices.patchProduct)
  .delete(productsServices.deleteProduct)

module.exports = router 