const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Empresas y Transferencias',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar empresas y transferencias',
    },
  },
  apis: ['./routes/*.js'],
};
const specs = swaggerJsdoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

