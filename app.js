const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//const swaggerUi = require('swagger-ui-express');
//const swaggerSpec = require('./swagger');
const usersRoute = require('./routes/users.js');
//const ataquesRoute = require('./routes/ataques.js');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

// Redirigir '/' a '/api'
//app.get('/', (req, res) => {
//  res.redirect('/api');
//});

// Configurar Swagger
//app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rutas de la aplicación
app.use('/users', usersRoute);
//app.use('/ataques', ataquesRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({ error: err.message });
});

module.exports = app;
