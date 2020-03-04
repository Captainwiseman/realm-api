import { getWorldData } from "../serv/http-functions";

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const world = await getWorldData();

  res.send(world);
};
