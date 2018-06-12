const Section = require("../models/Section");

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
