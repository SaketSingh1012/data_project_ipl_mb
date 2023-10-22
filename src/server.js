const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve files from the 'output' directory
app.use('/output', express.static(path.join(__dirname, 'public/output')));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
