const userServices = require("../services/user-services")

exports.login = async (req, res) => {
    try {
        const data = await userServices.login(req.body.email, req.body.password)
        if (!data) {
            return res.status(404).json({ message: 'Email or Password is ' })
        }
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json(error)
    }
}

exports.register = async (req, res) => {
    try {
        const user = await userServices.findUser(req.body.email)
        if (user) {
            return res.status(200).json({ message: 'Email is allready registerd...' })
        }
        const data = await userServices.addUser(req.body)
        return res.status(201).json({ data })
    } catch (error) {
        return res.status(500).json(error)
    }
}