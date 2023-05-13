const Hapi = require("@hapi/hapi");
const sequelize = require("./config/db");
//const router = require("./router");
const routes = require('./config/routes');

const server = Hapi.server({
    port: 8000,
    host: "localhost"
});

const plugins = [
    {
        plugin: routes, options: {
            routesBaseDir: './api'
        }
    }
]
//router.forEach((path) => server.route(path));

sequelize.authenticate()
  .then(() => console.log('Connected to database'))
  .catch(error => console.error('Unable to connect to the database:', error));

module.exports = {server, plugins};