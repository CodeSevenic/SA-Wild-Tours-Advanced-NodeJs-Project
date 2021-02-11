const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Using 3rd party middleware
// app.use(morgan('dev'));
// Express middleware
app.use(express.json());
app.use(express.static(`${__dirname}/public`));

// Creating our own middleware
app.use((req, res, next) => {
    console.log('Hello from the middleware :-D');
    next();
});
// Creating our own middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    console.log(req.requestTime);
    next();
});

// Creating and Mounting Multiple Routers
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
