const express = require('express');
const process = require('process');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`App listening at port ${port}`);
});

process.on('SIGINT', () => {
  console.info('Bye bye');
  process.exit(0);
});
