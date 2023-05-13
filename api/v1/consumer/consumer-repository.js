const ConsumerModel = require('./consumer-model');

const data = [];

const save = (consumer) => {
    try {
        ConsumerModel.create(consumer);
    } catch (error) {
        console.log(error);
    }
    return consumer;
};

const findAll = async () => {
    const result = ConsumerModel.findAll({ raw: true });
    return result;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

module.exports = { save, findAll, findById };