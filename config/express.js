// config/express.js
const express = require("express");
const load    = require("express-load");

module.exports = function(app) {
    app.set("port", 3000);

    app.use(express.static("./public"));

    app.set("view engine", "ejs");
    app.set("views", "./app/views");

    load("entities", {cwd: "app"}).then("controllers").then("routes").into(app);

    app.get("*", (req, res) => {
        res.status(404).render("404");
    });

    return app;
};
