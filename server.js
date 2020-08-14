const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

//Routes
const hbsfeatures = require('./routes/testing/hbsfeatures');
const portfolio = require('./routes/portfolio/main');

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
app.use('/testing/hbs', hbsfeatures);
app.use('/', portfolio);

app.listen(4400, () => {
   console.log(`Server is starting at port 4400`);
});