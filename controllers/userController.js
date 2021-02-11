// Users requests methods
exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!',
    });
};

exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!',
    });
};

exports.createUsers = (req, res) => {
    res.status(201).json({
        status: 'success',
        message: 'User was created!',
    });
};

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'User was Updated!',
    });
};

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'success',
        message: 'User was Deleted!',
    });
};
