const consumerBusiness = require("./consumer-business");

const create = (request, h) => {

    consumerBusiness.create(request.payload);
    return "created";
}

const find = (request, h) => {
    return consumerBusiness.findAll();
}

const getById =  (request, h) => {
    const id = request.params.id;

    const consumer = consumerBusiness.findByid(id);
    
    if(consumer) {
        return h.response(consumer).code(200);
    }
    return h.response("Not found").code(404);
}

module.exports = {find, create, getById};