const express = require("express");
const router = express.Router();
//METHOD 1
// router.get("/", (req, res) => {
//   res.status(200).send("router hello shrestha");
// });

//METHOD 2
router.route("/").get((req, res) => {
  res.status(200).send("hello shrestha");
});

module.exports = router;
