const { Router } = require('express');
const { productController } = require('../controllers/product.controllers');

const router = Router();

router.get('/products', productController.get_products);
router.get('/products/:id', productController.get_product);
router.post('/products', productController.add_product);
router.delete('/products/:id', productController.delete_product);



module.exports = router;