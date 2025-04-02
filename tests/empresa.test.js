const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Empresa = require('../models/empresa');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Empresas', () => {
  beforeEach(async () => {
    await Empresa.deleteMany({});
  });

  if('debería crear una nueva empresa', async () => {
    const res = await chai.request(app).post('/empresas').send({
      razonSocial: 'Empresa de Prueba',
      cuit: '12-34567890-1',
    });
    expect(res).to.have.status(201);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('razonSocial', 'Empresa de Prueba');
  });

  // Implementar otros tests para GET, PUT, DELETE
});
