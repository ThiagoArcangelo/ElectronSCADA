'use strict';

const http = require('http');
const app = require('../app');

const Server = http.createServer(app);
const port = normalizePort(process.env.PORT || '3000');

// Serialport
const parser = require('../SerialPort/serial');

// Conexão websocket
const io = require('socket.io').listen(Server);

io.on('connection', socket => {
    socket.emit('connected');
    let lastValue = ''; // Variavel adicional para evitar envio constante de dados através do socket 
    parser.on('data', data  => {
      if (lastValue !== data) {        
        socket.emit('data', data);
      } else {
        socket.emit('Desconectado');
      }
      lastValue = data;
    });
  });

//Conexão com o servidor.
Server.listen(port, () => {
  console.log(`Conectado na porta: ${port}`);
});

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
      return val;
  }
if (port >= 0) {
      return port;
  }
return false;
}

