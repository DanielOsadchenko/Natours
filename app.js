const express = require('express');
const fs = require('fs');
const PORT = 3000;
const app = express();

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`, 'utf8')
);

app.use(express.json());

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});
