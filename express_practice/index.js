const express = require('express');

const app = express();


const server = app.listen(4494, () => {
    console.log(`Server started successfully on port number ${server.address().port}`);
});
