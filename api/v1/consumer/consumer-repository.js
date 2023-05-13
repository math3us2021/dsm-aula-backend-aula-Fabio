const ConsumerModel = require('./consumer-model');

const data = [];

const save = (consumer) => {

    data.push(consumer);

    return consumer;
};

const findAll = async () => {
    const result = await ConsumerModel.findAll();
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

module.exports = {save, findAll, findById};