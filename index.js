const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    ok: true,
  });
});

app.listen(3000, () => {
  console.log('Server running in port 3000');
});
