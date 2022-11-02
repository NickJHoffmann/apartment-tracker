const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();


// Serve files for React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Catch-all endpoint to serve React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});