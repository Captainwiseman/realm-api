import { getWorldData } from "../serv/http-functions";

module.exports = async (req, res) => {
  const world = await getWorldData();
  res.send(world);
};
