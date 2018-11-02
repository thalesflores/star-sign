process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
  describe('/GET star sign', () => {
    it('it should GET correctly star sign', (done) => {
      chai.request(server)
        .get('/api/v1/star_sign?name=Thales&birthdate=16-05-1996')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('starSign').eql("Taurus");
          done();
        });
    });
  });