const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "base_prueba"
});

conexion.connect((error) => {
    if (error) {
        console.log("Error de conexión:", error);
        return;
    }

    console.log("Conectado a MySQL");
});

module.exports = conexion;