const validateAuth = (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "Email or Password is missing",
            error: "Bad Request Email or Password is missing",
            success: false,
            data: {}
        });
    }
    next();
};
const validateisadmin = (req, res, next) => {
    if (!req.body.id) {
        return res.status(400).json({   
            message: "id is missing",
            error: "Bad Request id is missing",
            success: false,
            data: {}
        });
    }
    next();
}

module.exports = {validateAuth,
    validateisadmin
};
