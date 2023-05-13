const data = [];

const save = (consumer) => {

    data.push(consumer);

    return consumer;
};

const findAll = () => {
    return data;
}

const findById = (id) => {

    return data.find(c => c.id == id);
}

module.exports = {save, findAll, findById};