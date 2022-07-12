const yup = require("yup");

const validate = (body) => {
    const imageDefination = yup.object({
        secure_url: yup
            .string("Image link must be a string"),
        public_id: yup
            .string("Image id must be a string")
    })

    const imageSchema = yup.object({
        banner: imageDefination.required("Banner image is required"),
        1: imageDefination,
        2: imageDefination,
        3: imageDefination,
        4: imageDefination
    });

    const schema = yup.object({
        image: imageSchema,
        title: yup
            .string("Title has to be a string")
            .min(8, "Title must have at least 8 characters")
            .max(100, "Title mustn't have more than 100 characters")
            .required("You've not provided the title"),
        price: yup
            .number("Price has to be a number")
            .min(0, "Price must be a positive number")
            .required("You've not provided the price"),
        description: yup
            .string("Description has to be a string")
            .min(10, "Description must have at least 10 characters")
            .max(500,"Description mustn't have more than 500 characters")
            .required("You've not provided the description"),
        country: yup
            .string("Country id has to be a string")
            .required("You've not provided the country id"),
        city: yup
            .string("City id has to be a string")
            .required("You've not provided the city id"),
        longitude: yup
            .number("Longitude has to be a number")
            .required("You've not provided the longitude"),
        latitude: yup
            .number("Latitude has to be a number")
            .required("You've not provided the latitude")
    });
    return schema.validate(body);
}

module.exports = validate;