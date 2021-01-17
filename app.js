const http = require('http');

// req = request - petición de cliente
// res = response - respuesta del servidor
// cliente = navegador
const server = http.createServer((req, res) => {
  console.log("Un cliente se ha conectado");
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.write('La conexión ha sido correcta');
  res.end();
})

server.listen(3000, () => {
  console.log("Servidor a la espera de conexiones");
})
