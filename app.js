require('dotenv').config();
const express = require('express')
const  hbs = require('hbs');
const app = express()

const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err){});

//TODO require hbs


//servir contenido statico

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    'nombre':'Leonidas Cerna',
    'titulo': 'Curso de Node'
  });
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    'nombre':'Leonidas Cerna',
    'titulo': 'Curso de Node'
  });
})
/*app.get('/generic', function (req, res) {
  res.sendFile(__dirname+'/public/generic.html')
})*/

app.get('/elements', function (req, res) {
  res.render('elements', {
    'nombre':'Leonidas Cerna',
    'titulo': 'Curso de Node'
  });
})
/*app.get('/elements', function (req, res) {
  res.sendFile(__dirname+'/public/elements.html')
})*/

/*app.get('/', function (req, res) {
  res.send('Hello World')
})*/

app.get('/hola-mundo', function (req, res) {
    res.send('Hello World - Hola Mundo')
  })


  app.get('*', function (req, res) {
    res.sendFile(__dirname+'/public/404.html')
  })
  


app.listen(port)