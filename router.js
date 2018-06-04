const express = require("express");
const { Router } = express;
const sectionController = require("./controllers/SectionController");
const appointmentController = require("./controllers/AppointmentController");

const router = Router();

router.route("/sections").get(sectionController.getSections);
router.route("/book").post(appointmentController.book);
router
  .route("/users/:doctor/:weekDay")
  .get(appointmentController.getAvailableHours);
router.route("/appointments/status").put(appointmentController.updateStatus);
router
  .route("/appointments/patient/:patientName")
  .get(appointmentController.getAppointmentsForPatient);

module.exports = router;
