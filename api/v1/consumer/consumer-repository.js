const ConsumerModel = require('./consumer-model');
const {Op} = require('sequelize');

const data = [];

const save = (consumer) => {
    try {
        ConsumerModel.create(consumer);
    } catch (error) {
        console.log(error);
    }
    return consumer;
};

const findAll = async (options) => {
    const { offset, limit } = options.pagins;

    const filter = options.filter;
    const result = ConsumerModel.findAll({ 
        raw: true, 
        limit,
        offset,
        where: {
            ...(filter.name ? { name: filter.name }: {}),
            ...(filter.city ? { city: filter.city }: {}),
            ...(filter.name_in ? { name:{ [Op.in]: filter.name_in.split(",") } }: {}),

        }
    });//offset: 5 passa o proximo valor
    return result;
}

const findById = async (id) => {
    console.log("🚀 ~ file: consumer-repository.js:31 ~ findById ~ id:", id)
    const result = ConsumerModel.findByPk(id)
    return result;
}

module.exports = { save, findAll, findById };