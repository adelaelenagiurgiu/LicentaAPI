const Section = require("../models/Section");

exports.getDoctor = (req, res, next) => {
  const doctorName = req.params.doctor;

  Section.findOne({ "doctors.doctorName": doctorName }, (err, section) => {
    if (err) return next(err);

    for (const doctor of section.doctors) {
      if (doctor.doctorName === doctorName) {
        res.json(doctor);
      }
    }
  });
};
