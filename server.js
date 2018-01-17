// server.js
const express  = require("express");
const database = require("./config/database");

const app = express();
require("./config/express")(app);

app.listen(app.get("port"), () => {
    console.log("Server on in port " + app.get("port"));
});
