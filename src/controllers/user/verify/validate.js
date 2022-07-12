const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        code: yup
            .number("Enter a 6-digit code")
            .min(100000, "Enter a 6-digit code")
            .max(999999, "Enter a 6-digit code")
            .required("Enter a 6-digit code")
    });
    return schema.validate(body);
}

module.exports = validate;