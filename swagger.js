const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api WarGame',
      version: '1.0.0',
      description: 'API documentation for wargame',
    },
  },
  apis: ['./models/*.js', './routes/*.js'], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
