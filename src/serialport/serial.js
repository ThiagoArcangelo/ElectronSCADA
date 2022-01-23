const serialport = require('serialport');
const Readline = serialport.parsers.Readline;

const port = new serialport('COM12', {  
  baudRate: 9600
});

const parser = port.pipe(new Readline({delimiter: '\r\n'}));


module.exports = parser;