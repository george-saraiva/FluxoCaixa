const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../fluxocaixa_app");
const Lancamento = require("../models/lancamentoModel");
const apiPath = process.env.API_PATH;

chai.should();
chai.use(chaiHttp);

describe("Testes da API Lançamentos", () => {
  beforeEach((done) => {
    Lancamento.deleteMany({}).then(() => {
      done();
    });
  });

  describe("/POST Lancamento", () => {
    it("Criar um novo lancamento de crédito", (done) => {
      let lancamento = {
        descricao: "Teste de lançamento de crédito",
        valor: 123.45,
        tipo: "C",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(lancamento)
        .end((error, response) => {
          response.should.have.status(200);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });

  describe("/POST Lancamento", () => {
    it("Criar um novo lancamento de débito", (done) => {
      let lancamento = {
        descricao: "Teste de lançamento de débito",
        valor: 456.78,
        tipo: "D",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(lancamento)
        .end((error, response) => {
          response.should.have.status(200);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });

  describe("/POST Lancamento", () => {
    it("Criar um novo lancamento de inválido", (done) => {
      let lancamento = {
        descricao: "Teste de lançamento inválido",
        valor: 456.78,
        tipo: "X",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(lancamento)
        .end((error, response) => {
          response.should.have.status(400);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });
  
});
