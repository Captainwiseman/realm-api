import {getWorldData} from "../serv/server-functions";

module.exports = (req, res) => {
  res.send(getWorldData());
};
