const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 443;

// Ruta para servir el archivo index.html y registrar la dirección IP
app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(`Dirección IP: ${ip}`);
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Middleware para servir archivos estáticos
app.use(express.static(__dirname));

// Configuración del servidor HTTPS
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/minimate.tech/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/minimate.tech/fullchain.pem'),
};

const server = https.createServer(options, app);

// Iniciar el servidor
server.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});
