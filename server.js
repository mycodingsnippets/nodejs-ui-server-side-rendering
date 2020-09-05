const express = require('express');
const expbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config({
    path: './config/config.env'
});

const app = express();
const PORT = process.env.PORT || 4400;

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

// Body Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Handlebars
const { formatDate, stripTags, truncate } = require('./helpers/hbs');
app.set('view engine', 'hbs');
app.engine('hbs', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname,'views/layout'),
    partialsDir: path.join(__dirname,'views/partial'),
    extname: 'hbs',
    helpers: {
        formatDate,
        stripTags,
        truncate
    }
}));
app.use(express.static(path.join(__dirname,'public')));

//Routing Middlewares
app.use('/', require('./routes/main/index'));
app.use('/refs', require('./routes/refs/index'));
app.use('/ecommerce', require('./routes/ecommerce/index'));
app.use('/api', require('./services/dummyService'));
app.use(function (req, res, next) {
    if(req.url.startsWith('/story-book')){
        require('./routes/storyBook/index')(app);
    }
    next();
});

app.listen(PORT, () => {
   console.log(`Server is starting at port ${process.env.PORT}`);
});