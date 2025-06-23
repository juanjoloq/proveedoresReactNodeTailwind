const express = require("express");
const cors = require("cors");
const { connectDB, sequelize } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

// Rutas
const proveedorRoutes = require("./routes/proveedorRoutes");
app.use("/proveedor", proveedorRoutes);

// Sincronizar modelos y conectar DB
sequelize.sync()
    .then(() => {
        connectDB().then(() => {
            console.log("Base de datos conectada y modelos sincronizados");
        });
    })
    .catch(error => {
        console.error("Error al sincronizar modelos o conectar la base de datos:", error);
        process.exit(1);
    });

module.exports = app;
