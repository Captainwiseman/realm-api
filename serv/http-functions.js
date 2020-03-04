import dbModule from "./data-modules/dbModule";
import log from "../common/logger";
import _ from "lodash";

export async function getWorldData(req, res) {
  log("Requesting World...", "server");
  const world = await dbModule.readAllHistoryDataFromDB();

  return res.json(world);
}