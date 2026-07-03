const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

router.get("/", auth, role("ADMIN"), (req,res)=>{
 res.json({message:"Users list"});
});

module.exports = router;