const express = require("express");
const { handleCartItems } = require("../controller/cart");
const router = express.Router();

router.post("/", handleCartItems);

module.exports = router;
