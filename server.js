const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

//Routes
const refs = require('./routes/refs/index');
const ecommerce = require('./routes/ecommerce/index');
const main = require('./routes/main/index');

//Services
const dummyService = require('./services/dummyService');

const app = express();

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

app.listen(4400, () => {
   console.log(`Server is starting at port 4400`);
});