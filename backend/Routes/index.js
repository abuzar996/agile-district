const router = require("express").Router();
const data = require("../Data/const");

router.get("/data", (_, res) => {
  res.status(200).send(JSON.stringify(data));
});

module.exports = router;
