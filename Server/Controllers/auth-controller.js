//controller= handles the application's logic.

// used to process incoming requests, interact with models(data sources) and sends responses back to clients.

const home = async (req, res) => {
  try {
    res.status(200).send("hello people good to see u");
  } catch (error) {
    console.log(error);
  }
};
const register = async (req, res) => {
  try {
    res.status(200).send("all register");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
