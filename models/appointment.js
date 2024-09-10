const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  AppointmentDate: {
    type: String,
    required: true,
  },
  AppointmentTime: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  AppointmentStatus: {
    type: String,
    required: true,
  },
  DoctorName: {
    type: String,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
