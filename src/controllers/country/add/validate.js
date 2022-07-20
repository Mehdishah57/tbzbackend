const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        name: yup
            .string("Name has to be a string")
            .min(5, "Name must have at least 5 characters")
            .max(75, "Name mustn't have more than 75 characters")
            .required("You've not provided the name"),
        phone: yup
            .string("Phone has to be a string")
            .min(1, "Phone code must be less than 1")
            .max(75, "Phone code mustn't be more than 2000")
            .required("You've not provided the phone code"),
        currency: yup
            .string("Currency has to be a string")
            .min(5, "Currency must have at least 1 character")
            .max(75, "Currency mustn't have more than 5 characters")
            .required("You've not provided the currency"),
        code: yup
            .string("Code has to be a string")
            .min(5, "Code must have at least 1 character")
            .max(75, "Code mustn't have more than 5 characters")
            .required("You've not provided the code"),
    })
    return schema.validate(body);
}

module.exports = validate;