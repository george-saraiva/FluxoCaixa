const express = require("express");
const cors = require("cors");
const logger = require("./middlewares/logger");
const swaggerUi = require("swagger-ui-express");
const fluxoCaixaDB = require("./middlewares/dbServer");
const lancamentoRouter = require("./routes/lancamentoRoutes");

const app = express();

require("dotenv").config();
fluxoCaixaDB.config();

app.use(cors());
app.use(express.json());
app.use(process.env.API_PATH, lancamentoRouter);

const swaggerDocument = require("./api_docs/api-lancamentos.v1.json");
app.use(process.env.API_PATH + "/api_docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(3001, () => {
  logger.info("Server is running on port 3001");
});

module.exports = app;
