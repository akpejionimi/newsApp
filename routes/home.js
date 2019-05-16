const express = require("express");

const router = express.Router();
const controllerHome = require ("../controllers/home_contro");

router.get("/", controllerHome.home);



module.exports = router;