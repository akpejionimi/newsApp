const express = require("express");

const router = express.Router();
const controllerAddnews = require ("../controllers/news");

router.get("/add", controllerAddnews.addNews);
router.post("/create", controllerAddnews.postAddnews);
router.get("/news/:id",controllerAddnews.getNewsById);



module.exports = router;