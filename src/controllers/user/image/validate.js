const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        url: yup
            .string("Image url can only be a string")
            .url("Image url should be a valid url")
            .required("You can't leave the image url empty"),
        id: yup
            .string("Image id can only be a string")
            .max(35,"Image id can't be more than 35")
            .required("You can't leave the image id empty")
    });

    return schema.validate(body);
}

module.exports = validate;