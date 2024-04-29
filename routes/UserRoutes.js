const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');



router.get('/getuser', userController.getAllUsers);//Rota para Obter totos os usuarios
router.post('/register', userController.createUser);//Rota para criar um novo usuário
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);//Estas rotas são usadas para atualizar e deletar um usuário, respectivamente. Você precisa substituir :id pelo ID do usuário.
router.post('/login', authController.login);//Esta rota é usada para fazer login. Você precisa enviar o email e a senha do usuário no corpo da solicitação


module.exports = router;