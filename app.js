const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;

// Ruta para servir el archivo index.html y registrar la dirección IP
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Dirección IP: ${ip}`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware para servir archivos estáticos
app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
