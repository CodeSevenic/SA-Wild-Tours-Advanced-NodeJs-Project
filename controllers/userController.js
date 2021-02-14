const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// Users requests methods
exports.getAllUsers = catchAsync(async (req, res, next) => {
    const users = await User.find();

    // SEND RESPONSE
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users,
        },
    });
});

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
