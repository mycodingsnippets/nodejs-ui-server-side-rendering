const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config({
    path: './config/config.env'
});

//Routes
const refs = require('./routes/refs/index');
const ecommerce = require('./routes/ecommerce/index');
const main = require('./routes/main/index');

//Services
const dummyService = require('./services/dummyService');

const app = express();
const PORT = process.env.PORT || 4400;

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

//Handlebars
app.set('view engine', 'hbs');
app.engine('hbs', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname,'views/layout'),
    partialsDir: path.join(__dirname,'views/partial'),
    extname: 'hbs'
}));
app.use(express.static(path.join(__dirname,'public')));

//Routing Middlewares
app.use('/refs', refs);
app.use('/ecommerce', ecommerce);
app.use('/', main);
app.use('/api', dummyService);
app.use('/story-book', require('./routes/storyBook'));

app.listen(PORT, () => {
   console.log(`Server is starting at port ${process.env.PORT}`);
});