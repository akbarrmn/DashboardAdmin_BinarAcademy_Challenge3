const router = require('express').Router()

router.get('/login', (req, res) => 
    {res.render('../auth/login', {
        layout:'../layouts/login',
        title:'BCR',
        message: req.flash('message')
    })
})

router.get('/',(req,res)=>{
    res.redirect('/login')
})

router.post('/login',(req,res)=>{
    let filterPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/
    let filterEmail = /^[a-zA-Z0-9_\.]+@+[a-zA-Z]+\./
    let email = req.body.email
    let password = req.body.password
    if ((password.match(filterPassword)) && (filterEmail.test(email))) {
        res.redirect('/dashboard')
    }else{
        req.flash('message','Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital')
        res.redirect('/login')
    }
})
    

module.exports = router