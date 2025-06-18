const Proveedor = require("../models/proveedorModel")

exports.getAllProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.findAll();
        res.json(proveedores)
    } catch (error) {
        console.error("Error al obtener los proveedores:", error)
        res.status(500).send("Error al obteniendo los proveedores")
    }
}

exports.getProveedoresId = async (req, res) => {
    const idProvee = req.params.id
    try {
        const provee = await Proveedor.findByPk(idProvee);
        if (!provee) {
            return res.status(404).send("Proveedor no encontrado")
        }
        res.json(provee)
    } catch (error) {
        console.error("Error al obtener el proveedor:", error)
        res.status(500).send("Error al obtener el proveedor")
    }
}  

exports.createProveedores = async (req, res) => {
    const {nombre, telefono, email, direccion} = req.body
    if (!nombre || !email ){
        res.status(400).send("Nombre y Correo son Obligatorios")
    }     
    try {
        const newProveedor = await Proveedor.create({nombre, telefono, email, direccion}) 
        res.status(201).json(newProveedor)
    } catch (error) {
        console.error("Error al crear el proveedor:", error)
        if (error.name === "SequelizeUniqueConstraintError") {
            return res.status(409).send("El emain ya esta registrado")
        }
        res.status(500).send("Error al crear proveedor ")
    }
};

exports.updateProveedores = async (req, res) => {
    const idProvee = req.params.id
    const {nombre, telefono, email, direccion} = req.body
    if (!nombre || !email){
        res.status(400).send("Nombre y Correo son Obligatorios")
    } 
    try {
        const provee = await Proveedor.findByPk(idProvee)
        if (!provee) {
            return res.status(404).send("Proveedor no encontrado")
        }
        await provee.update({nombre, telefono, email, direccion})
        res.json({message: "Proveedor actualizado correctamente"})
    } catch (error) {
        console.error("Error actualizando el proveedor:", error);
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(409).send("El email ya está registrado");
        }
        res.status(500).send("Error actualizando al proveedor");
    }
} 

exports.deleteProveedor = async (req, res) => {
    const idProvee = req.params.id 
    try {
        const provee = await Proveedor.findByPk(idProvee)
        if (!provee){
            return res.status(404).send("Proveedor no encontrado")
        }
        await provee.destroy();
        res.json({message: "Proveedor eliminado correctamente"})
    } catch (error) {
        console.error("Error eliminando al proveedor:", error);
        res.status(500).send("Error eliminando al proveedor");
    }
}