import Joi from "joi";

const carValidator = Joi.object({
    model: Joi.string().regex(/^[a-zA-Zаа-яА-ЯіІїЇ]{1,20}$/).required().messages({
        "string.pattern.base": "Only eng and ukrainian letters. Min - 1, max - 20",
        "string.empty": "model cannot be empty"
    }),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        "number.empty": "this field cannot be empty",
        "number.min": "min value is 1990",
        "number.max": `max value is ${new Date().getFullYear()}`,
    }),
    price: Joi.number().min(1).max(1000000).required().messages({
        "number.empty": "this field cannot be empty",
        "number.min": "min value is 1",
        "number.max": "max value is 1000000",
    }),
});

export {
    carValidator
}