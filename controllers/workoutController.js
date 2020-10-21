const express = require("express");
const router = express.Router();

// const db = require("../models");

router.get("/exercise", (req, res) => {
  res.json({
    success: true,
  });
})

router.get("/stats", (req, res) => {
  
})



module.exports = router;
