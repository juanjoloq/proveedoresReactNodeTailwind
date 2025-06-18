
const express = require('express');
const router = express.Router();

const proveedorController = require("../controllers/proveedorController");


router.get('/', proveedorController.getAllProveedores)
router.post('/', proveedorController.createProveedores)
router.get('/:id', proveedorController.getProveedoresId)
router.delete("/:id", proveedorController.deleteProveedor)
router.put('/:id', proveedorController.updateProveedores)

module.exports = router