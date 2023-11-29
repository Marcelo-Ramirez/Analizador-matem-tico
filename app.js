const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80; // Cambiado a puerto 80

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Ajustado la ruta del archivo HTML
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
