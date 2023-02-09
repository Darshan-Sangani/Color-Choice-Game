const express = require('express')
const User = require('../controller/user-controller')

const router = express.Router();

router.route('/login').post(User.login)

router.route('/sign-up').post(User.register)