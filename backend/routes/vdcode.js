const express = require("express");

const VdCodeController = require("../controllers/vdcode");

const router = express.Router();

router.post("", VdCodeController.createVdCode);

router.get("/:key", VdCodeController.getVdcode);

module.exports = router;
