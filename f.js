import express from 'express';

const app = express();
app.get('/f', (req, res) => {
  res.send('Hello from f.js');
});
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/f');
});

console.log("main");

