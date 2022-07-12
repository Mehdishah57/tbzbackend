const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        email: yup
            .string("Email must be a string")
            .email("Email must be valid")
            .required("You can't leave the email empty"),
        password: yup
            .string("Password must be a string")
            .min(8,"Password must be atleast 8 characters")
            .max(255,"Password must be less than 255 characters")
            .required("You can't leave the password empty")
    });

    return schema.validate(body);
}

module.exports = validate;