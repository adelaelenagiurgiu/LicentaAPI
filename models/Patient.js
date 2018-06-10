const mongoose = require("mongoose");
const { Schema } = mongoose;

const patientsSchema = new Schema({
  patientName: String,
  patientGender: String,
  patientCNP: String,
  patientTelephone: String,
  patientEmail: String,
  patientAddress: {
    country: String,
    city: String,
    streetName: String,
    streetNumber: Number,
    postalCode: String
  },
  patientAge: Number,
  patientWeight: Number,
  patientHeight: Number,
  doctorVisits: [
    {
      doctorName: String,
      dateOfTheVisit: { type: Date, default: Date.now },
      analysisTitle: String,
      results: [
        {
          result: String
        }
      ],
      disease: String,
      medication: String
    }
  ]
});

module.exports = mongoose.model("patients", patientsSchema);
