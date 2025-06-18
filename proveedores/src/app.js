const express = require("express");
const app = express();
const { connectDB, sequelize } = require("./config/db");

app.use(express.json());

const proveedorRoutes = require("./routes/proveedorRoutes");
app.use("/proveedor", proveedorRoutes);


sequelize.sync()
    .then(() => {
        connectDB().then(() => {
            app.listen(3000, () => {
                console.log("Servidor corriendo en http://localhost:3000");
            });
        });
    })
    .catch(error => {
        console.error("Error al sincronizar modelos o conectar la base de datos:",
            error);
        process.exit(1);
    });

module.exports = app;