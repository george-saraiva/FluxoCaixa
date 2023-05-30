const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lancamentoSchema = new Schema(
  {
    descricao: {
      type: String,
      required: true
    },
    valor: {
      type: Number,
      required: true,
      min: 0
    },
    tipo: {
      type: String,
      required: true,
      enum: ["D", "C"]
    },
    dataLancamento: {
      type: Date,
      required: true
    }
  },
  {
    versionKey: false
  }
);

module.exports = mongoose.model("Lancamento", lancamentoSchema, "FluxoCaixa");
