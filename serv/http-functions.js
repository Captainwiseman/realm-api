import dbModule from "./data-modules/dbModule";
import _ from "lodash";

export async function getWorldData(req, res) {
  console.log("Requesting World...");
  const world = await dbModule.readAllHistoryDataFromDB();

  return res.json(world);
}