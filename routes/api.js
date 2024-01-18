const router = require("express").Router();
const apiController = require("../controller/apiController.js");
const { upload, uploadMultiple } = require("../middlewares/multer.js");

// endpoint Singnin
router.get("/landing-page", apiController.landingPage);
router.get("/detail-page/:id", apiController.detailPage);
router.post("/booking-page", upload, apiController.bookingPage);

module.exports = router;
