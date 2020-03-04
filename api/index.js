import { getWorldData } from "../serv/http-functions";
import Cors from "micro-cors";

const cors = Cors({
  origin: "*"
});

const mainEndPointHandler = async (req, res) => {
  const world = await getWorldData();

  res.send(world);
};

export default cors(mainEndPointHandler);
