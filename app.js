
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/users', (_req, res) => {
  res.send('Test for node Api ');
})

app.listen(PORT, () => {
  console.log(`Server running on port: `, PORT);
});
 module.exports = app;
 // Test  do
 // third committ to chamge
 // hours commit to chamge
 // devop