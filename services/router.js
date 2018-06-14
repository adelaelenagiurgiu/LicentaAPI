const passport = require("passport");
require("./passport");

const sectionController = require("../controllers/SectionController");
const appointmentController = require("../controllers/AppointmentController");
const authController = require("../controllers/AuthController");
const patientController = require("../controllers/PatientController");
const doctorController = require("../controllers/DoctorController");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireLogin = passport.authenticate("local", { session: false });
const router = require("express").Router();

router.route("/register").post(authController.Register);
router.route("/login").post(requireLogin, authController.Login);

router.route("/sections").get(sectionController.getSections);

router.route("/book").post(requireAuth, appointmentController.book);
router
  .route("/users/:doctor/:weekDay/:date")
  .get(requireAuth, appointmentController.getAvailableHours);
router
  .route("/appointments/patient/:patientName")
  .get(requireAuth, appointmentController.getAppointmentsForPatient);
router
  .route("/appointments/doctor/:doctorName")
  .get(requireAuth, appointmentController.getAppointmentsForDoctor);
router
  .route("/appointments/update/:id")
  .put(requireAuth, appointmentController.updateAppointment);
router
  .route("/appointments/delete/:id")
  .delete(requireAuth, appointmentController.delete);

router.route("/patients/add").post(requireAuth, patientController.addPatient);
router
  .route("/patients/:patientEmail")
  .get(requireAuth, patientController.getPacient);

router
  .route("/doctors/:doctorEmail")
  .get(requireAuth, doctorController.getDoctor);
router
  .route("/doctors/patients/:doctorName")
  .get(requireAuth, doctorController.getPacients);

module.exports = router;
