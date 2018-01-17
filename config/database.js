// config/db.js
const knex = require("knex");

const db = knex({
    client: "mysql",
    connection: {
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "rungame"
    },
    pool: {
        min: 0,
        max: 10
    }
});

module.exports = db;
