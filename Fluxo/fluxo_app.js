const express = require("express");
const fluxo_app = express();

fluxo_app.use("/", express.static(__dirname));
fluxo_app.listen(3000);
