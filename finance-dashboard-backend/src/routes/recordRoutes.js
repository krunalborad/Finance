const express = require("express");
const router = express.Router();

const controller = require("../controllers/recordController");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.post("/", auth, role("ADMIN"), controller.createRecord);

router.get("/", auth, role("ADMIN","ANALYST"), controller.getRecords);

router.put("/:id", auth, role("ADMIN"), controller.updateRecord);

router.delete("/:id", auth, role("ADMIN"), controller.deleteRecord);

module.exports = router;