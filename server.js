const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const homePage = require('./routes/admin');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(homePage);
app.use('/form', homePage);

app.listen(process.env.PORT || 3000, function () {
    console.log("Server has started.");
});

