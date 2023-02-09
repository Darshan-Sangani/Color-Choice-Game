const roomServices = require('../services/room-services')

exports.createRoom = async (req, res) => {
    try {
        const data = await roomServices.create();
        return res.status(201).json({ data })
    } catch (error) {
        return res.status(500).json({ error })
    }
}

exports.addPlayer = async (req, res) => {
    try {
        const room = await roomServices.findRoom()
        if (!room) return res.status(400).json({ message: "Room is not available" })
        const data = await roomServices.addPlayer(room.code, room.players);
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error })
    }
}

exports.removeplayer = async (req, res) => {
    try {
        const room = await roomServices.findRoom()
        const data = await roomServices.removeplayer(req.body.code, room.players)
        return res.status(200).json({ data })
    } catch (error) {
        return res.status(500).json({ error })
    }
}