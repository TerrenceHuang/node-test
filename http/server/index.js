const express = require('express');
const app = express();



app.get('/', (req, res) => {
  console.log(req);
  res.send('Hello World!')
});

app.get('/header', (req, res) => {
  console.log(req.get('Cookie'));
  res.send('header!');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));