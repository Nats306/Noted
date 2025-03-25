const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getUsuarios)
router.get('/:id', usuarioController.getUsuarioById)
router.post('/', usuarioController.addUsuario)
router.put('/:id', usuarioController.updateUsuario)
router.post('/ChangeStatus/:id', usuarioController.changeUserStatus)

module.exports = router;