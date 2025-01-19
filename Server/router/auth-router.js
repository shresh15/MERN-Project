const express = require("express");
const router = express.Router();

const { home, register } = require("../Controllers/auth-controller");

router.route("/").get(home);
router.route("/register").get(register);

module.exports = router;

//METHOD 1
// router.get("/", (req, res) => {
//   res.status(200).send("router hello shrestha");
// });

//METHOD 2

// router.route("/").get((req, res) => {
//   res.status(200).send("hello shrestha");
// });
