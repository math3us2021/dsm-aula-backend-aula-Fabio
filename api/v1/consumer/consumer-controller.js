const consumerBusiness = require("./consumer-business");

const create = async (request, h) => {
  const consumer = {
    name: request.payload.name,
    city: request.payload.address.city,
  };
  const result = toPlayload(await consumerBusiness.create(consumer));

  return h.response(result).code(201);
};

const find = async (request, h) => {
  const result = toPlayload(await consumerBusiness.findAll());
  return h.response(result).code(200);
};

const getById = (request, h) => {
  const id = request.params.id;

  const consumer = consumerBusiness.findByid(id);

  if (consumer) {
    return h.response(consumer).code(200);
  }
  return h.response("Not found").code(404);
};

const toPlayload = (consumerModel) => {
  let payload;

  if (Array.isArray(consumerModel)) {
    const payload = [];
    consumerModel.forEach((consumer) => {
      payload.push({
        id: consumer.id,
        name: consumer.name,
        address: {
          city: consumer.city,
        },
      });
    });
    return payload;
  }

  if (consumerModel && typeof consumerModel == "object") {
    payload = {
      id: consumerModel.id,
      name: consumerModel.name,
      address: {
        city: consumerModel.city,
      },
    };
    return payload;
  }
};
module.exports = { find, create, getById };
