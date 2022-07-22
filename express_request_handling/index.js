const express = require('express');
const app = express();

app.listen(8080);
//app.use(express.json());  

const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');

// app.use((req, res, next) => {
//     const logEntry = `host: ${req.hostname}
//     ip: ${req.ip}
//     method: ${req.method}
//     path: ${req.path}
//     time: ${new Date()}`;
//     console.log(`Time: ${new Date()}` + new Date());
//     console.log(logEntry);
//     next();  
// });

app.use(bodyParser.json());
app.use(routes);