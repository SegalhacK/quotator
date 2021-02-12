const express = require("express");
const app = express();
const port = 8000;

// para archivos estaticos
app.use('/static', express.static("static"));

// vistas
app.set('views', `${__dirname}/views`); 
app.set('view engine', 'ejs');

//sesion
//const session = require('express-session');
//app.use(session({secret: 'miclave'})); 

//para hacer post
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// para usar mis rutas
app.use(require('./routes/router'));


//para escuchar colocar al último en el código
app.listen(port, () => console.log(`Listening on port: ${port}`));

