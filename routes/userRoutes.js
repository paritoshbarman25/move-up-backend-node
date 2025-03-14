const express = require('express');
const {createUser, loginUser, fetchProfile} = require('../controllers/userController');
const {verifyToken} = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');

const router = express.Router();


router.post("/register", upload.fields([ { name: "profilePhoto", maxCount: 1 }, { name: "aadharCardPhoto", maxCount: 1 }, { name: "panCardPhoto", maxCount: 1 }]), createUser);
router.post("/login", loginUser);
router.get("/profile", verifyToken, fetchProfile)

module.exports = router;