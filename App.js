const express = require('express');
const http = require('http');
const connectDB = require('./utils/database');
const setupSocket = require('./utils/socket');
const swaggerDocs = require('./swagger');
const empresaRoutes = require('./routes/empresaRoutes');
const transferenciaRoutes = require('./routes/transferenciaRoutes');
const empresaTransferenciaRoutes = require('./routes/empresaTransferenciaRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const server = http.createServer(app);

connectDB();
setupSocket(server);
swaggerDocs(app);

app.use(express.json());
app.use('/empresas', empresaRoutes);
app.use('/transferencias', transferenciaRoutes);
app.use('/empresasTransferencias', empresaTransferenciaRoutes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
