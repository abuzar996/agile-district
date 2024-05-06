const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");




const router = require("./Routes");
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
