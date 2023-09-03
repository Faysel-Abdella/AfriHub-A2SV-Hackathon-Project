const express = require("express");
const { AddJob } = require("../controllers/jobConeller");
const router = express.Router();

router.post("/add-job", AddJob);

module.exports = router;
