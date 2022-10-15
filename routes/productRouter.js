const express = require('express');
const productService = require('../services/productService');

function routes(Product){
    var productRouter = express.Router();
    var service = productService(Product);
    
    productRouter.route('/products')
    .post(service.post)
    .get(service.get);

    productRouter.use('/products/:productId', service.getByIdMiddleware);

    productRouter.route('/products/:productId')
    .get(service.getById)
    .put(service.modifyById);

    return productRouter;
}

module.exports = routes;