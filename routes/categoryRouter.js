const express = require('express');
const categoryController = require('../services/categoryService');

function routes(Category){
    var categoryRouter = express.Router();
    var controller = categoryController(Category);
    categoryRouter.route('/categories')
    .post(controller.post)
    .get(controller.get);

    return categoryRouter;
}

module.exports = routes;