const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

app.set('view engine', 'hbs');
app.engine('hbs', expbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname,'views/layout'),
    partialsDir: path.join(__dirname,'views/partial'),
    extname: 'hbs'
}));
app.use(express.static('public'));

//Routing
app.get('/', (req, res) => {
   res.render('index', {
       title: 'Home',
       name: 'Aditya',
       isImportant: false,
       isLoggedIn: false,
       tweets: [
           {user: "Aditya",tweet:"Tweet1"},
           {user: "Aaina",tweet:"Tweet2"},
           {user: "Mamta",tweet:"Tweet3"},
           {user: "Dev",tweet:"Tweet4"},
       ],
       scripts: [
           '/js/test.js'
       ]
   });
});

app.listen(4400, () => {
   console.log(`Server is starting at port 4400`);
});