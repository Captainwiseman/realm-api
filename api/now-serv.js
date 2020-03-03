import { getWorldData } from "../serv/server-functions";

//Routes
app.get("/world", (req, res) => getWorldData(req, res));

app.get("/", (req, res) => {
  res.send("Live and Incharge...");
});

module.exports = (req, res) => {
  res.end("Date is: ", new Date());
};
