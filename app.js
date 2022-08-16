// Middleware
const express = require('express');
const app = express()
const bodyParser = require('body-parser');
var path = require('path');
const expressLayouts = require('express-ejs-layouts');

// const methodOverride = require('method-override')

// Mengambil data form menggunakan module body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

// Static Files
app.use(express.static('public'))

// Express session
const session = require('express-session');
const flash = require('connect-flash');
app.use(session({
    secret: 'SecretKey',
    resave: true,
    saveUninitialized: true
}));
app.use(flash())

// Templating Engine
app.set('view engine', 'ejs')
app.use(expressLayouts) 
app.set('views', path.join(__dirname, 'views/pages'))

// Routing
app.use('/', require('./router'))

// Server
app.listen(3000, () => {
    console.log('Server berhasil dibuat');
})