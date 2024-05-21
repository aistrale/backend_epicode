// scopo: validare quello che l'utente passa nel body della richiesta
// NON è globale, controlla solo quello che viene inserito negli autori
const validateUser = (req, res, next) =>  {
    const errors = []
    const { name, lastName, email, dateOfBirth, avatar } = req.body

    if(name !=="" && typeof name !== "string") {
        errors.push("first name must be a valid string")
    }

    if(lastName !=="" && typeof lastName !== "string") {
        errors.push("last name must be a valid string")
    }

    if(email !=="" && typeof email !== "string") {
        errors.push("email address must be a valid string")
    }

    if(dateOfBirth !=="" && typeof dateOfBirth !== "number") {
        errors.push("date of birth address must be a valid string")
    }

    if(avatar !=="" && typeof avatar !== "string") {
        errors.push("avatar address must be a valid string")
    }

    if(errors.length > 0) {
        res.status(400).send({errors})
    } else {
        next()
    }
}

module.exports = validateUser