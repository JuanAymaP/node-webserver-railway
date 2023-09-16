const express = require('express')
const hbs = require('hbs')
//ESTABLECER VARIABLES DE ENTORNO
require('dotenv').config()

const app = express()
const port = process.env.PORT;


//HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//SERVIR CONTENIDO ESTÁTICO
app.use( express.static( 'public') );

app.get('/', (req, res) => {
    res.render('home',{
        nombre:'Juan Ayma',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Ayma',
        titulo: 'Curso de Node'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Ayma',
        titulo: 'Curso de Node'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/old-template/404.html');
});

//app.listen(8080);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});