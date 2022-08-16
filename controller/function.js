const fs = require('fs')
const path = require('path');

const CarList = () => {
    const dir = path.join(__dirname, '../data/cars.json')
    const dataCars = JSON.parse(fs.readFileSync(dir, 'UTF-8'))
    return dataCars
}

const OrderList = () => {
    const dir = path.join(__dirname, '../data/order.json')
    const dataOrder = JSON.parse(fs.readFileSync(dir, 'UTF-8'))
    return dataOrder
}

module.exports = {CarList,OrderList}

