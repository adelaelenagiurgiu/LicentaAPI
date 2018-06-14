const Section = require("../models/Section");
const Patient = require("../models/Patient");
const Appointment = require("../models/Appointment");

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

  const patientsForDoctor = [];
  Appointment.find({ doctor: name })
    .lean()
    .exec((err, appointments) => {
      if (err) return next(err);

      for (const app of appointments) {
        patientsForDoctor.push(app.patient);
      }

      Patient.find(
        { patientName: { $in: patientsForDoctor } },
        (err, patients) => {
          if (err) return next(err);

          res.json(patients);
        }
      );
    });
};
