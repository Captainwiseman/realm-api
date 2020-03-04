import { getWorldData } from "../serv/http-functions";
import Cors from "micro-cors";

const cors = Cors({
  origin: "http://localhost:3000"
});

const mainEndPointHandler = async (req, res) => {
  const world = await getWorldData();

  res.send(world);
};

export default cors(mainEndPointHandler);
