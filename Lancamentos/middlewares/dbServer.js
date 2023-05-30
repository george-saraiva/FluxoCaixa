require("dotenv").config();
const logger = require("./logger");
const fluxoCaixaDB = require("mongoose");

exports.config = function () {
  let database;
  try {
    const databaseUrl =
      process.env.NODE_ENV == "PRD"
        ? process.env.DATABASE_URL_PRD
        : process.env.DATABASE_URL_DEV;

    database = fluxoCaixaDB.connect(databaseUrl);
  } catch (err) { 
    logger.error(err);
  }

  logger.debug("Connectado ao banco de dados");

  return database;
};
