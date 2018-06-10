const Section = require("../models/Section");

exports.getHistory = (req, res, next) => {
  const patientParam = req.params.patient;
  Section.find({ "doctors.patients.patientName": patientParam })
    .lean()
    .exec((err, sections) => {
      for (const section of sections) {
        for (const doctor of section.doctors) {
          for (const patient of doctor.patients) {
            if (patient.patientName === patientParam) {
              res.json({ history: patient.doctorVisits });
            }
          }
        }
      }
    });
};
