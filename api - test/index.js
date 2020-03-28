import { getListings } from "../serv/http-functions";
import Cors from "micro-cors";

const cors = Cors({
  origin: "*"
});

const mainEndPointHandler = async (req, res) => {
  const board = await getListings();

  res.send(board);
};

export default cors(mainEndPointHandler);
