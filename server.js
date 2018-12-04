const app = require('./app');
const server = require('http').Server(app);
const PORT = 3000;


server.listen(PORT, () => {
  console.log('Server is listening on PORT: ', PORT);
});
