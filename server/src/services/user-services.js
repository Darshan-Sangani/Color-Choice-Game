const User = require('../model/user-model')

exports.login = async (email, password) => {
    const data = await User.findOne({ where: { email, password } })
    return data;
}

exports.addUser = async (body) => {
    return await User.create(body);
}

exports.findUser = async (email) => {
    const data = await User.findOne({ where: { email } })
    return data;
}