const productsControllers = require('./products.controllers')

const getAllProducts = (req, res) => {
  productsControllers.findAllProducts()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: 'Bad request', err }))
}

const getProductById = (req, res) => {
  const id = Number(req.params.id)
  productsControllers.findProductById(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: 'Product not found' })
      }
      res.status(200).json(data)
    })
    .catch((err) => res.status(400).json({ message: 'Bad request', err }))
}

const postNewProduct = (req, res) => {
  const productObj = req.body

  productsControllers.createProduct(productObj)
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json({ message: 'Bad request', err }))
}

const patchProduct = (req, res) => {
  const id = Number(req.params.id)
  const productObj = req.body

  productsControllers.updateProduct(id, productObj)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: `Product not found` })
      }
      res.status(200).json(data) 
    })
    .catch(err => {
      res.status(400).json({ message: 'Bad request', err })
    })
}

const deleteProduct = (req, res) => {
  const id = Number(req.params.id)

  productsControllers.deleteProduct(id)
    .then(data => {
      if (!data) {
        return res.status(404).json({ message: `Product not found` })
      }
      res.status(204).json({message: 'Products has been deleted'})
    })
    .catch(err => {
      res.status(400).json({ message: 'Bad request', err })
    })
}

module.exports = {
  getAllProducts,
  getProductById,
  postNewProduct,
  patchProduct,
  deleteProduct
}