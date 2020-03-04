import dbModule from "./data-modules/dbModule";
import _ from "lodash";

export async function getWorldData() {
  console.log("Requesting World...");
  const world = await dbModule.readAllHistoryDataFromDB();
  return world;
}