const router = require("express").Router();
const admindController = require("../controller/adminController");
const { upload, uploadMultiple } = require("../middlewares/multer.js");
const auth = require("../middlewares/auth.js");

// endpoint Singnin
router.get("/signin", admindController.viewSignin);
router.post("/signin", admindController.actionSignin);
router.get("/logout", admindController.actionLogout);
router.use(auth);

// endpoint category
router.get("/dashboard", admindController.viewDashboard);
router.get("/category", admindController.viewCategory);
router.post("/category", admindController.addCategory);
router.put("/category", admindController.editCategory);
router.delete("/category/:id", admindController.deleteCategory);

// endpoint Bank
router.get("/bank", admindController.viewBank);
router.post("/bank", upload, admindController.addBank);
router.put("/bank", upload, admindController.editBank);
router.delete("/bank/:id", admindController.deleteBank);

// endpoint Item
router.get("/item", admindController.viewItem);
router.post("/item", uploadMultiple, admindController.addItem);
router.get("/item/show-image/:id", admindController.showImageItem);
router.get("/item/:id", admindController.showEditItem);
router.put("/item/:id", uploadMultiple, admindController.editItem);
router.delete("/item/:id/delete", admindController.deleteItem);

// endpoint Detail Item Feature
router.get("/item/show-detail-item/:itemId", admindController.viewDetailItem);
router.post("/item/add/feature", upload, admindController.addFeature);
router.put("/item/edit/feature", upload, admindController.editFeature);
router.delete("/item/:itemId/feature/:id", admindController.deleteFeature);

// endpoint Detail Item Activity
router.post("/item/add/activity", upload, admindController.addActivity);
router.put("/item/edit/activity", upload, admindController.editActivity);
router.delete("/item/:itemId/activity/:id", admindController.deleteActivity);

// endpoint Booking
router.get("/booking", admindController.viewBooking);
router.get("/booking/:id", admindController.showDetailBooking);
router.put("/booking/:id/confirmation", admindController.actionConfirmation);
router.put("/booking/:id/reject", admindController.actionReject);

module.exports = router;
