const yup = require("yup");

const validate = (body) => {
    const schema = yup.object({
        name: yup
            .string("Name must be a string")
            .min(5, "Name must be at least 5 characters")
            .max(25, "Name can't be more than 25 characters")
            .required("You can't leave the name empty"),
        email: yup
            .string("Email must be a string")
            .email("Email must be valid")
            .required("You can't leave the email empty"),
        password: yup
            .string("Password must be a string")
            .min(5, "Password must be at least 5 characters")
            .max(25,"Password can't be more than 25 characters")
            .required("You can't leave the password empty"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password'), null], 'Passwords must match')
            .required("Passwords must match"),
        countryCode: yup
            .number("Country Code must be a 1 or 2 digit number")
            .min(1,"Country Code must be a 1 or 2 digit number")
            .max(99,"Country Code must be a 1 or 2 digit number")
            .required("You can't leave the country Code empty"),
        phoneNumber: yup
            .number(1000000000, "Phone Number you entered isn't valid")
            .min(1000000000, "Phone Number must be a 10 digit number")
            .max(9999999999,"Phone Number must be a 10 digit number")
            .required("You can't leave the Phone Number empty")
    })

    return schema.validate(body);
}

module.exports = validate;