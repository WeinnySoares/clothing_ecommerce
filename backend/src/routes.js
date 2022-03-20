const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductsController');

routes.get('/',ProductsController.index);
routes.get('/list',ProductsController.list);
routes.post('/create',ProductsController.create);
routes.put('/alter/:id',ProductsController.alter);
routes.delete('/delete/:id',ProductsController.delete);

module.exports = routes;