const schedule = require("node-schedule");

const Appointment = require("../models/Appointment");
const Section = require("../models/Section");

schedule.scheduleJob("*/1 */13 * * */7", () => {
  Section.find((err, sections) => {
    if (err) return err;
    sections.map(section => {
      section.doctors.map(doctor => {
        doctor.doctorSchedule.map(day => {
          day.appointments.map(appointment => {
            appointment.booked = false;
          });
        });
      });
      section.save(err => {
        if (err) return err;
      });
    });
  });
});

exports.getAvailableHours = (req, res, next) => {
  const doctorName = req.params.doctor;
  const weekDay = req.params.weekDay;

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
      day.appointments.map(hour => {
        if (!hour.booked) {
          availableHours.push(hour);
        }
      });

      res.json({ hours: availableHours });
    });
};

exports.updateStatus = (req, res, next) => {
  const doctorName = req.body.doctor;
  const weekDay = req.body.weekDay;
  const startHour = req.body.startHour;

  Section.findOne({ "doctors.doctorName": doctorName }, (err, section) => {
    if (err) return next(err);

    const doctor = section.doctors.find(
      doctor => doctor.doctorName === doctorName
    );
    const day = doctor.doctorSchedule.find(element => element.day === weekDay);
    const appointment = day.appointments.find(
      element => element.start === startHour
    );
    appointment.booked = true;

    section.save(err => {
      if (err) return next(err);
      res.json({ updated: true });
    });
  });
};

exports.book = (req, res, next) => {
  const appointment = new Appointment({
    patient: req.body.patient,
    doctor: req.body.doctor,
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
