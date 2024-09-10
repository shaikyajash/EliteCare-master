const { getUserDetails } = require("../utils/tokenManager");
const Appointment = require("../models/appointment");
const User = require("../models/user");

const handleAppointment = async (req, res, next) => {
  try {
    const { date, time, description, doctorName } = req.body;

    // get user details from the token
    const userData = getUserDetails(req);

    const appointment = new Appointment({
      AppointmentDate: date,
      AppointmentTime: time,
      Description: description,
      AppointmentStatus: "Pending",
      DoctorName: doctorName,
      UserId: userData.id,
    });

    // Save the appointment and get appintment id
    const savedAppointment = await appointment.save();

    // Add the appointment id to the user's appointments array and save the user

    const user = await User.findById(userData.id);
    user.appointments.push(savedAppointment._id);
    await user.save();

    return res.status(201).json({ message: "OK", appointment });

  } catch (err) {
    return res.status(500).json({ error: "error", cause: err.message });
  }
};
module.exports = {
  handleAppointment,
};
