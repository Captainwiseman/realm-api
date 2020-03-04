import {getWorldData} from "../serv/http-functions";

module.exports = (req, res) => {
  res.send(getWorldData());
};
