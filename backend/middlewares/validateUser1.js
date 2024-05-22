const { body, validationResult } = require("express-validator")

const validateBody = [
    body("name").isString().notEmpty(),
    body("lastName").isString().notEmpty(),
    body("email").isEmail().notEmpty(),
    body("dateOfBirth").isDate().notEmpty(),
    body("avatar").isURL().optional(),
    (req, res, next) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        next()
    }
]

module.exports = validateBody