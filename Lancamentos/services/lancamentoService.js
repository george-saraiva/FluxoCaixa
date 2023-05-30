const lancamentoModel = require("../models/lancamentoModel");

exports.getAllLanamentos = async () => {
  return await lancamentoModel.find();
};

exports.createLancamento = async (lancamento) => {  
  return await lancamentoModel.create(lancamento);
};
exports.getLancamentoById = async (id) => {
  return await lancamentoModel.findById(id);
};

exports.updateLancamento = async (id, lancamento) => {
  return await lancamentoModel.findByIdAndUpdate(id, lancamento);
};

exports.deleteLancamento = async (id) => {
  return await lancamentoModel.findByIdAndDelete(id);
};
