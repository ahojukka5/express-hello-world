const express = require('express');
const app = express();
const port = process.env.NODE_PORT | 3002;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
