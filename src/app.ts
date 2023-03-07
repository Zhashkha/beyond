import express from "express";

import getAllInfluencers from "./controllers/get-all-influencers";

const app = express();

app.get("/", getAllInfluencers);

app.listen(3000, () => {
  console.log("Listening at port 3000");
});
