const express = require("express");
const router = express.Router();

const controller = require("../controllers/dashboardController");
const auth = require("../middleware/authMiddleware");

// Dashboard Routes
router.get("/summary", auth, controller.summary);
router.get("/categories", auth, controller.categoryBreakdown);
router.get("/recent", auth, controller.recent);

module.exports = router;