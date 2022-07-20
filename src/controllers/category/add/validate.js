const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        name: yup
            .string("Name has to be a string")
            .max(70, "Name mustn't have more than 70 characters")
            .required("You've not provided the name"),
        subCategories: yup
            .array("Sub-categories have to be an array")
            .of(yup.string("Sub-categories must have string elements"))
            .required("You've not provided the sub-categories")
    })
    return schema.validate(body);
}

module.exports = validate;