const router = require('express').Router()
const fs = require('fs');
const path = require('path');
const {CarList} = require('../controller/function');

router.get('/cars', (req, res) => {
    const data = CarList()
    res.render('cars', {
        layout: '../layouts/main',
        title: 'BCR',
        sidebar: 'CARS',
        subSidebar: 'List Car',
        data,
        messageSuccess: req.flash('messageSuccess'),
        messageDelete: req.flash('messageDelete')
    })
})

router.get('/add-new-car', (req, res) => {
    res.render('addCars', {
        layout: '../layouts/main',
        title: 'BCR',
        sidebar: 'CARS',
        subSidebar: 'List Car'
    })
})


//save the car data from json file
const saveData = (data) => {
    const dir = path.join(__dirname, '../data/cars.json')
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dir, stringifyData)
}

router.post('/add-new-car', (req, res) => {
    const existCars = CarList() //Get existing cars data
    const {id, nama, harga, kategori, foto, startrent, finishrent, createdat, updatedat, modal} = req.body
    const date = new Date(Date.now()).getDate()
    const month = new Date(Date.now()).getMonth()
    const year = new Date(Date.now()).getFullYear()
    const data = {
        id:Math.floor(Math.random() * 10000),
        nama,
        harga,
        kategori,
        foto,
        startrent,
        finishrent,
        createdat: `${date}-0${month + 1}-${year}`,
        updatedat: `${date}-0${month + 1}-${year}`,
        modal: Math.random().toString(36).substring(2,10)
    }
    existCars.push(data)
    saveData(existCars)
    req.flash('messageSuccess','Data Berhasil Disimpan')
    res.redirect('/cars')
})

router.get('/cars/delete/:id', (req, res) => {
    const carId = Number(req.params.id)
    const data = CarList()
    const newData = data.filter(item => item.id !== carId)
    saveData(newData)
    req.flash('messageDelete','Data Berhasil Dihapus')
    res.redirect('/cars')
})

router.get('/cars/update/:id', (req, res) => {
    const carId = Number(req.params.id)
    const data = CarList()
    const updateData = data.filter( item => item.id === carId )
    res.render('updateCar', {
        layout: '../layouts/main',
        title: 'BCR',
        sidebar: 'CARS',
        subSidebar: 'List Car',
        updateData
    })
})

router.post('/cars/update/:id', (req, res)=>{
    const date = new Date(Date.now()).getDate()
    const month = new Date(Date.now()).getMonth()
    const year = new Date(Date.now()).getFullYear()

    const carId = Number(req.params.id)
    const data = CarList()
    const newUpdateAt = `${year}-0${month + 1}-${date}`
    const carsData = data.filter(item => item.id === carId)[0]

    carsData.id = Number(req.body.id)
    carsData.nama = req.body.nama
    carsData.harga = req.body.harga
    carsData.kategori = req.body.kategori
    carsData.foto = req.body.foto || data.foto
    carsData.startrent = req.body.startrent
    carsData.finishrent = req.body.finishrent
    carsData.updatedat = newUpdateAt

    saveData(data)
    res.redirect('/cars')
})

module.exports = router