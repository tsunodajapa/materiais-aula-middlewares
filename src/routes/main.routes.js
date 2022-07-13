const { Router } = require('express');
const mainController = require('../controllers/mainController');

const mainRouter = Router();

mainRouter.get('/teste', mainController.teste);
mainRouter.get('/teste-dois', mainController.testeDois);
mainRouter.get('/teste-tres', mainController.testeTres);
mainRouter.get('/teste-quatro', mainController.testeQuatro);

module.exports = mainRouter;

