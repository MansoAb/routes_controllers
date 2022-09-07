const express = require("express");
const app = express();
const port = 4000;
app.use(require("./routes/product.routes"))
app.use(require("./routes/brand.routes"))


app.get("/", function (req, res) {
  res.json("Hello world!");
});

app.listen(port, function () {
  console.log("Сервер запущен");
});
