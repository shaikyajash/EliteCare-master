const express = require("express");
const { handleAppointment } = require("../controller/appointment");
const { appointmentValidator, validate } = require("../utils/validator");
const { verifyToken } = require("../utils/tokenManager");

const router = express.Router();

// api/appointments/book
router.post(
  "/book",
  validate(appointmentValidator),
  verifyToken,
  handleAppointment
);

module.exports = router;
