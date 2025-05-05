const dateModule = require("./dateModule");

const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("WIlkommen in der API");
});

app.listen(PORT, () => {
  console.log("Server läuft auf ${PORT}");
});
