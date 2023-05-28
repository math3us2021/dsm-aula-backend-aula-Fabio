const Joi = require("joi");
const { name } = require("./consumer-routes");

const postConsumer = {
    payload: Joi.object({
        id: Joi
            .number()
            .integer(),
        name: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        address: Joi.object({
            city: Joi
                    .string()
                    .required()
            }).required()
        }).required(),
        
};

const findAll = {
    query: Joi.object({
        offset: Joi
            .number()
            .integer()
            .min(0)
            .default(0),
        limit: Joi
            .number()
            .integer()
            .min(1)
            .max(5)
            .default(5),
        name: Joi
            .string()
            .max(100)
            .min(3)
            .trim(),
        city: Joi
            .string()
            .max(100)
            .min(3)
            .trim(),
        name_in: Joi
            .string()
            .min(3)
            .max(100)
            .trim()
    })
};
const findByid = {
    // params: Joi.object({
    //     id: Joi
    //         .number()
    //         .integer()
    //         .required()
    // })
};

module.exports = {postConsumer, findAll, findByid};