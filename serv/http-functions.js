import dbModule from "./data-modules/dbModule";
import _ from "lodash";

export async function getListings() {
  console.log("Requesting Listings...");
  const board = await dbModule.readAllListingsInCollection();
  return board;
}