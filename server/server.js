import app from './app';
import http from 'http';

// Get port and store in Express
const port = process.env.PORT || 8000;
app.set('port', port);

// Create HTTP Server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
