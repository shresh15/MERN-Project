const express = require("express");
const app = express();
const router = require("./router/auth-router");

/*This code adds Express middleware
parses incoming request bodies with JSON payloads
*/
app.use(express.json());

app.use("/api/auth", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running: ${PORT}`);
});
