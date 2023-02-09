const express = require('express')
const Room = require("../controller/room-controller")

const router = express.Router();

router.route('/addRoom').post(Room.createRoom)

router.route('/joinPlayer').post(Room.addPlayer)

router.route('/disconnect').post(Room.removeplayer)