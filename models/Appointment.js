const mongoose = require("mongoose");
const { Schema } = mongoose;

const appointmentSchema = new Schema({
  patient: String,
  doctor: String,
  doctorImage: String,
  weekDay: String,
  date: {
    day: String,
    month: String,
    year: String
  },
  start: String,
  end: String
});

module.exports = mongoose.model("appointments", appointmentSchema);
