const express = require("express");

const app = express();

const PORT = 3000;

const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.get("/api/stand", (req, res) => {
    res.json({
        nombre: "Star Platinum",
        usuario: "Jotaro Kujo"
    });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});