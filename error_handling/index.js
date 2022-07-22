const express = require('express');
const app = express();

app.listen(4000);



app.get('/error', (req, res, next) => {
    const err = new Error('Useful error message');
    next(err);
});

const errorLogger = (err, req, res, next) => {
    console.log(err.stack);
    next(err);
};
app.use(errorLogger);

const sendError = (err, req, res,next) => {
    res.status(505).send(err.message);
    next(err);
};
app.use(sendError);








