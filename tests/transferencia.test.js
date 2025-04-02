const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const Transferencia = require('../models/transferencia');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Transferencia', () => {
  beforeEach(async () => {
    await Transferencia.deleteMany({});
  });

  if('debería crear una nueva Transferencia', async () => {
    const res = await chai.request(app).post('/transferencias').send({
    numero: 120,
      empresa_id: '12-34567890-1',
      cuenta:  'cuenta',
      importe: 123.23,


    });
    expect(res).to.have.status(201);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('12-34567890-1', 'cuenta',);
  });

  // Implementar otros tests para GET, PUT, DELETE
});
