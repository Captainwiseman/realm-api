const {getWorldData} = require("../serv/server-functions")

// const data = [
//   {id: 1}, {id: 2}, {id:3}
// ]

module.exports = (req, res) => {
    res.send(getWorldData());
};
