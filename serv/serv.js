import { getListings } from "./http-functions";
import moment from "moment";
import log from "../common/logger";
import _ from "lodash";

const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const cors = require("cors");

const port = 3000;

app.use(cors());

//Routes
app.get("/board", async (req, res) => {
  const listings = await getListings();
  res.json(listings)
});

app.get("/", (req, res) => {
  res.send("Live and Incharge...");
});

//Sockets

let activeConnectionsStatus = {
  anons: {
    quantity: 0,
    sockets: []
  }
};

io.on("connection", socket => {
  log("an Anonymous User has connected", "server");

  activeConnectionsStatus.anons.sockets.push(socket.id);
  activeConnectionsStatus.anons.quantity =
    activeConnectionsStatus.anons.sockets.length;

  log(activeConnectionsStatus, "server", "json");

  socket.on("disconnect", reason => {
    log(`an Anonymous User has disconnected: ${reason}`, "server");

    _.pull(activeConnectionsStatus.anons.sockets, socket.id);
    activeConnectionsStatus.anons.quantity =
      activeConnectionsStatus.anons.sockets.length;

    log(activeConnectionsStatus, "server", "json");
  });
});

http.listen(port, () => {
  const initialTimestamp = moment(new Date()).format("MMMM Do YYYY, h:mm:ss a");
  log(`Dodo Board Initiated on ${initialTimestamp}!`, "server");
  log(`Listening on port ${port}!`, "server");
});
