const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware para leer formularios (POST)
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde /public
app.use(express.static(path.join(__dirname, "public")));

// Ruta POST que intercepta el animal y redirige a la vista 2
app.post("/animal", (req, res) => {
  const animalFavorito = req.body.animal;

  // Redirección a la segunda vista con query param
  res.redirect(`/resultado.html?animal=${encodeURIComponent(animalFavorito)}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});