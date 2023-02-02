const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const connectTomongo = require("./db");
//important to use this middleware otherwise i will get some error
app.use(express.json());

app.use(cors());
app.use("/api/user", require("./Routes/userRoute"));
app.use("/api/post", require("./Routes/postRoute"));

connectTomongo();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
