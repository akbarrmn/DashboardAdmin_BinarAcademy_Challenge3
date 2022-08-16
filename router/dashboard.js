const router = require('express').Router()
const {CarList, OrderList} = require('../controller/function')

router.get('/dashboard', (req, res) => { 
    const data = CarList()
    const dataOrder = OrderList()
    res.render('dashboard', { 
        layout:'../layouts/main',
        title:'BCR', 
        sidebar: 'DASHBOARD', 
        subSidebar: 'Dashboard',
        data,dataOrder
    })    
})

module.exports = router