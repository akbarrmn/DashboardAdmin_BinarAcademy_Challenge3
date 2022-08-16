const express = require('express')
const router = express.Router()

const login = require('./login');
const dashboard = require('./dashboard');
const cars = require('./cars');

router.use(login)
router.use(dashboard)
router.use(cars)
router.use((req, res) => {
    res.status(404).render('../auth/404', {layout: '../layouts/404',title:'404'})
})

module.exports = router