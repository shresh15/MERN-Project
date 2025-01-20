const express = require("express");
const router = express.Router();

const authcontrollers = require("../Controllers/auth-controller");

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);

module.exports = router;
// post is used when we want to store data in database

//METHOD 1
// router.get("/", (req, res) => {
//   res.status(200).send("router hello shrestha");
// });

//METHOD 2

// router.route("/").get((req, res) => {
//   res.status(200).send("hello shrestha");
// });
