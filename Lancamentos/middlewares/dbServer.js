require("dotenv").config();
const logger = require("./logger");
const fluxoCaixaDB = require("mongoose");

exports.config = async function () {
  const databaseUrl =
    process.env.NODE_ENV == "PRD"
      ? process.env.DATABASE_URL_PRD
      : process.env.DATABASE_URL_DEV;

  try {
    return await fluxoCaixaDB.connect(databaseUrl);
  } catch (error) {
    logger.error(error);
    return;
  }

  logger.debug("Connectado ao banco de dados");
};
