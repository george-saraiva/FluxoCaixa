const express = require("express");

const {
  getAllLancamentos,
  createLancamento,
  getLancamentoById,
  updateLancamento,
  deleteLancamento,
} = require("../controllers/lancamentoController");
 
const router = express.Router();
 
router.route("/").get(getAllLancamentos).post(createLancamento);
router.route("/:id").get(getLancamentoById).put(updateLancamento).delete(deleteLancamento);
 
module.exports = router;