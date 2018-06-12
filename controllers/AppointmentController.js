const Appointment = require("../models/Appointment");
const Section = require("../models/Section");

exports.getAvailableHours = (req, res, next) => {
  const doctorName = req.params.doctor;
  const weekDay = req.params.weekDay;
  const dateParam = req.params.date;
  const date = dateParam.split("-");

  Section.findOne({ "doctors.doctorName": doctorName })
    .lean()
    .exec((err, section) => {
      const doctor = section.doctors.find(
        doctor => doctor.doctorName === doctorName
      );
      const day = doctor.doctorSchedule.find(
        element => element.day === weekDay
      );

      const availableHours = [];
      for (const appointment of day.appointments) {
        availableHours.push(appointment);
      }

      Appointment.find({ doctor: doctorName, weekDay: weekDay })
        .lean()
        .exec((err, appointments) => {
          for (const appointment of appointments) {
            for (const hour of availableHours) {
              if (
                appointment.start === hour.start &&
                appointment.date.day === date[0] &&
                appointment.date.month === date[1] &&
                appointment.date.year === date[2]
              ) {
                availableHours.splice(availableHours.indexOf(hour), 1);
              }
            }
          }
          res.json({ hours: availableHours });
        });
    });
};

exports.getAppointmentsForPatient = (req, res, next) => {
  const patient = req.params.patientName;
  Appointment.find({ patient: patient })
    .lean()
    .exec((err, appointments) => {
      if (err) return next(err);
      res.json({
        appointments: appointments
      });
    });
};

exports.getAppointmentsForDoctor = (req, res, next) => {
  const doctor = req.params.doctorName;
  Appointment.find({ doctor: doctor })
    .lean()
    .exec((err, appointments) => {
      if (err) return next(err);
      res.json({
        appointments: appointments
      });
    });
};

exports.book = (req, res, next) => {
  const appointment = new Appointment({
    patient: req.body.patient,
    doctor: req.body.doctor,
    doctorImage: req.body.doctorImage,
    weekDay: req.body.weekDay,
    date: req.body.date,
    start: req.body.start,
    end: req.body.end
  });
  appointment.save(err => {
    if (err) return next(err);
    res.json({ created: true });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  Appointment.findByIdAndRemove({ _id: id }, (err, appointment) => {
    if (err) return next(err);
    if (appointment) {
      res.json({
        deleted: true
      });
    }
  });
};
