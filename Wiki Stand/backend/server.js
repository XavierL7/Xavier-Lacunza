const express = require("express");
const cors = require("cors");

const app = express();
const path = require("path");
app.use("/imagenes", express.static(path.join(__dirname, "imagenes")));
app.use(cors());
app.use(express.json());

const db = require("./db");

app.get("/", (req, res) => {
    res.send("API funcionando");
});

app.get("/api/stands", (req, res) => {

    db.query("SELECT * FROM stands", (error, results) => {

        if (error) {
            return res.status(500).json(error);
        }

        res.json(results);

    });

});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});