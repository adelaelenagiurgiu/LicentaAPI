const Section = require("../models/Section");
const Patient = require("../models/Patient");

exports.getDoctor = (req, res, next) => {
  const email = req.params.doctorEmail;

  Section.findOne({ "doctors.doctorEmail": email }, (err, section) => {
    if (err) return next(err);

    for (const doctor of section.doctors) {
      if (doctor.doctorEmail === email) {
        res.json(doctor);
      }
    }
  });
};

exports.getPacients = (req, res, next) => {
  const name = req.params.doctorName;

  Patient.find({ "doctorVisits.doctorName": name }, (err, patients) => {
    if (err) return next(err);

    res.json({ patients });
  });
};
