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
