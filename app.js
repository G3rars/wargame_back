  const createError = require('http-errors');
  const express = require('express');
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const logger = require('morgan');
  const swaggerUi = require('swagger-ui-express');
  const swaggerSpec = require('./swagger');
  const usersRoute = require('./routes/users.js')

  let app = express();


  //app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

 // Rutas de la configuracion de swagger
 // Redirigir '/' a '/api'
  app.get('/', (req, res) => {
    res.redirect('/api');
  });
  app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use('/users', usersRoute);
  // rutas de la aplicacion
  //app.use('/users', usersRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  module.exports = app;
