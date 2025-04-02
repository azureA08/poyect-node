const socketIO = require('socket.io');

const setupSocket = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    socket.on('nuevaTransferencia', (transferencia) => {
      io.emit('transferenciaActualizada', transferencia);
    });

    socket.on('disconnect', () => {
      console.log('Cliente desconectado');
    });
  });
};

module.exports = setupSocket;

