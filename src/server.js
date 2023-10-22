const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/output', express.static(path.join(__dirname, 'public/output')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}` );
});
