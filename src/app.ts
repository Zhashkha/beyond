import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("API is working");
  res.send("Done");
});

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
