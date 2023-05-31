const logger = require("../middlewares/logger");
const lancamentoService = require("../services/lancamentoService");
const lancamentoModel = require("../models/lancamentoModel");

exports.createLancamento = async (request, response) => {
  let lancamento = new lancamentoModel(request.body);
  const err = lancamento.validateSync();

  if (err) {
    logger.error(err)
    response.status(400).json({ error: err.message });
    return;
  }

  try {
    lancamento = await lancamentoService.createLancamento(request.body);
    response.json(lancamento);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ error: err.message });
  }
};

exports.updateLancamento = async (request, response) => {
  let lancamento = new lancamentoModel(request.body);
  const err = lancamento.validateSync();

  if (err) {
    logger.error(err);
    response.status(400).json({ error: err.message });
    return;
  }

  try {
    lancamento = await lancamentoService.updateLancamento(
      request.params.id,
      request.body
    );
    response.json(lancamento);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ error: err.message });
  }
};

exports.getAllLancamentos = async (request, response) => {
  try {
    const lancamentos = await lancamentoService.getAllLanamentos();
    response.json(lancamentos);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ error: err.message });
  }
};

exports.getLancamentoById = async (request, response) => {
  try {
    const lancamento = await lancamentoService.getLancamentoById(
      request.params.id
    );

    if (!lancamento) {
      response.status(404).json();
      return;
    }

    response.json(lancamento);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ error: err.message });
  }
};

exports.deleteLancamento = async (request, response) => {
  try {
    const lancamento = await lancamentoService.deleteLancamento(
      request.params.id
    );

    if (!lancamento) {
      response.status(404).json();
      return;
    }

    response.json(lancamento);
  } catch (err) {
    logger.error(err);
    response.status(500).json({ error: err.message });
  }
};
