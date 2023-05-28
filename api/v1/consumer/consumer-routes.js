const { find, create, getById } = require("./consumer-controller");
const schema = require("./consumer-schema");

const plugin = {
    name: 'consumer-v1-route',
    version: '1',
    register: (server) => {
        server.route([
            {
                method: "GET",
                path: "/consumers",
                options: {
                    handler: find,
                    validate: schema.findAll
                }
            },
            {
                method: "GET",
                path: "/consumers/{id}",
                options: {
                    validate: schema.findByid,
                    handler: getById
                }
            },
            {
                method: "POST",
                path: "/consumers",
                options: {
                    validate: schema.postConsumer,
                    handler: create
                }
            }
        ])
    }
};

module.exports = plugin;