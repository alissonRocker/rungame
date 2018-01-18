// server.js
const http     = require("http");
const express  = require("express");

global.db = require("./config/database");

const app = express();
require("./config/express")(app);

const server = http.createServer(app);

server.listen(app.get("port"), () => {
    console.log("Server on in port " + app.get("port"));
});
