const Patient = require("../models/Patient");

exports.getPacient = (req, res, next) => {
  const email = req.params.patientEmail;
  Patient.findOne({ patientEmail: email })
    .lean()
    .exec((err, patient) => {
      if (err) return next(err);
      res.json(patient);
    });
};

exports.addPatient = (req, res, next) => {
  const data = {
    patientName: req.body.name,
    patientGender: req.body.gender,
    patientCNP: req.body.cnp,
    patientTelephone: req.body.phone,
    patientEmail: req.body.email,
    patientAddress: req.body.address,
    patientAge: req.body.age,
    patientWeight: req.body.weight,
    patientHeight: req.body.height
  };

  Patient.findOne(
    { patientEmail: data.patientEmail },
    (err, existingPatient) => {
      if (err) return next(err);
      if (existingPatient)
        return res
          .status(422)
          .json({ error: "Pacientul este deja inregistrat" });
      const patient = new Patient(data);
      patient.save(err => {
        if (err) return next(err);
        res.json({ patient });
      });
    }
  );
};
