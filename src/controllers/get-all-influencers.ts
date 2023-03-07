import { Request, Response, NextFunction } from "express";
import path from "path";
import csvToJson from "csvtojson";

const DATA_FILE = path.join(
  require.main?.filename || "",
  "..",
  "data",
  "influencers.csv"
);

export default function getAllInfluencers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    csvToJson()
      .fromFile(DATA_FILE)
      .then(function (jsonArrayObj) {
        res.status(200).json(jsonArrayObj);
      });
  } catch (err) {
    console.log(err);
  }
}
