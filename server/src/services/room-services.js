const Room = require('../model/room-model')
const { createRoomCode } = require('../helper/RoomCode')

exports.create = async () => {
    const code = createRoomCode(4)
    return await Room.create(code)
}

exports.findRoom = async () => {
    return await Room.findOne()
}

exports.addPlayer = async (code, player) => {
    const players = player + 1;
    return await Room.update({ players }, { where: { code } })
}

exports.removeplayer = async (code, players) => {
    const player = player - 1;
    return await Room.update({ players }, { where: { code } })
}