const http = require('http');

const host = 'localhost';
const port = 8000;

const server = http.createServer((req, res) => {
    // перевірка наявності Authorization header і його значення
  if (req.headers.authorization === 
    "BearerekV5Rk4wMlgvYVpCbmp5WUh5bHVPMktwMzktY05QeDRjT3FlWlNiUTJhbVpraHc5d3Y5a3YtU2pM") {
    // якщо Authorization header містить відповідне значення, повертаємо статус 200
    res.writeHead(200);
    res.end('OK');
  } else {
    // якщо Authorization header відсутній або містить неправильне значення, повертаємо статус 401
    res.writeHead(401);
    res.end('Unauthorized');
  }
});

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
