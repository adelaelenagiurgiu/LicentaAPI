const mongoose = require("mongoose");
const { Schema } = mongoose;

const sectionSchema = new Schema({
  firstImage: String,
  name: String,
  sectionDescription: String,
  doctors: [
    {
      doctorName: String,
      doctorSpecialization: String,
      doctorProfessionalGrade: String,
      doctorImage: String,
      doctorTelephone: String,
      doctorEmail: String,
      doctorSchedule: [
        {
          day: String,
          timeFrame: String,
          appointments: [
            {
              start: String,
              end: String
            }
          ]
        }
      ],
      patients: [
        {
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
        }
      ]
    }
  ],
  MedicalServicesOffered: [
    {
      ServiceType: String,
      price: Number
    }
  ]
});

module.exports = mongoose.model("sections", sectionSchema);
