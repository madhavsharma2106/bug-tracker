/**
 * Creates a new user in the database.
 * 
 * Checks if: 
 *  - The email id doesn't already exist in the database 
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
module.exports.userSignUp = (req, res, next) => {
    res.status(200).json({
        message: 'User Sign Up Called'
    })
}


module.exports.userLogin = (req, res, next) => {
    res.status(200).json({
        message: 'Login'
    })
}


module.exports.deleteUser = (req, res, next) => {
    console.log(req.body.Asdads);
    
    res.status(200).json({
        message: 'delete'
    })
}


module.exports.getAllUsers = (req, res, next) => {
    res.status(200).json({
        message: 'all'
    })
}
//edit profile
module.exports.editUser = (req, res, next) => {
    res.status(200).json({
        message: 'edit'
    })
}
