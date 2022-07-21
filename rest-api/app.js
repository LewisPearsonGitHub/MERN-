const express = require('express');
const app = express();
const port = 8080;

// Add URL handler
app.get('/', (req, res) => {
    const product = {title: "The Office DVD", price: 25.99};
    const json = JSON.stringify(product);
    res.setHeader('Content-Type', 'application/json');
    res.end(json);
});

// Add HTTP listener
app.listen(port, () => {
    console.log(`REST API application listening at http://localhost:${port}`)
});