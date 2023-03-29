const express = require ("express");
const app = express ()

app.get ("/", (reg, res) => {
    res.send("Hola Mundo del los Servidores Web");
});
app.get ("/productos", (reg, res) => {
    res.send("Esto seria en teoria la pagina productos");
});
app.get ("*", (reg, res) => {
    res.send("404 | Pagina no encontrada");
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console. log(`El servidor está corriendo en el puerto http://localhost: ${port}`);
});