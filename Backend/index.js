const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Merhaba, Backend çalışıyor!");
});

app.listen(port, () => {
  console.log(`Server http://localhost:${port} portunda çalışıyor.`);
});
