const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../lancamentos_app");
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

  describe("/GET Lançamentos", () => {
    it("Listar todos lançamentos", (done) => {
      chai
        .request(app)
        .get(apiPath)
        .end((error, response) => {
          response.should.have.status(200);
          response.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("/GET/:id Lançamento", () => {
    it("Obter um lançamento por id", (done) => {
      let lancamento = {
        descricao: "Teste de lançamento de crédito",
        valor: 123.45,
        tipo: "C",
        dataLancamento: "01/01/2000"
      };
      Lancamento.create(lancamento).then(function (lancamento) {
        chai
          .request(app)
          .get(apiPath + lancamento.id)
          .send(lancamento)
          .end((error, response) => {
            response.should.have.status(200);
            console.log(JSON.stringify(response.body));
            done();
          });
      });
    });
  });

  describe("/DELETE/:id Lançamento", () => {
    it("Excluir um lançamento por id", (done) => {
      let lancamento = {
        descricao: "Teste de lançamento de crédito",
        valor: 123.45,
        tipo: "C",
        dataLancamento: "01/01/2000"
      };
      Lancamento.create(lancamento).then(function (lancamento) {
        chai
          .request(app)
          .delete(apiPath + lancamento.id)
          .send(lancamento)
          .end((error, response) => {
            response.should.have.status(200);
            console.log(JSON.stringify(response.body));
            done();
          });
      });
    });
  });

  describe("/POST Lançamento", () => {
    it("Criar um novo Lançamento de crédito", (done) => {
      let Lancamento = {
        descricao: "Teste de lançamento de crédito",
        valor: 123.45,
        tipo: "C",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(Lancamento)
        .end((error, response) => {
          response.should.have.status(200);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });

  describe("/POST Lançamento", () => {
    it("Criar um novo Lançamento de débito", (done) => {
      let Lançamento = {
        descricao: "Teste de lançamento de débito",
        valor: 456.78,
        tipo: "D",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(Lançamento)
        .end((error, response) => {
          response.should.have.status(200);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });

  describe("/POST Lançamento", () => {
    it("Criar um novo Lançamento de inválido", (done) => {
      let Lançamento = {
        descricao: "Teste de lançamento inválido",
        valor: 456.78,
        tipo: "X",
        dataLancamento: "01/01/2000"
      };
      chai
        .request(app)
        .post(apiPath)
        .send(Lançamento)
        .end((error, response) => {
          response.should.have.status(400);
          console.log(JSON.stringify(response.body));
          done();
        });
    });
  });
});
