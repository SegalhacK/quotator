const { Router } = require('express');
const router = Router();
const { Quote } = require('../db');


// la variable que tengo que usar en la vista de iteracion y se muestra en el navegador después.
//Estos datos después vienen de afuera, es decir, del usuario.

router.get("/", async (req, res) => {
    const quotes = await Quote.findAll();
    res.render('forms'); //vista
})

router.get("/quotes", async (req, res) => {
    const quotes = await Quote.findAll();
    res.render('quotes', { quotes: quotes }); //vista, nombre_variable que le doy: variable de objetos.
})

/* el ejercicio dice que el botón skip debe mostarme las citas por tanto en vista citas debo poner la ruta /quotes
en href <a href="/quotes">Ver las citas</a>*/

router.post('/quotes', async (req, res) => {
    //agregar a la ruta quotes??? 
    const form_data = req.body;
    const new_quote = await Quote.create({
        author: form_data.author,
        quote: form_data.quote
    });
    console.log(req.body);
    const quotes = await Quote.findAll();
    res.render('quotes', { quotes })
});


//     // para agregar paises
// router.post('/', async (req, res) => {
//     // usamos modelos para agregar paises
//     const new_country = await Country.create({
//       name: req.body.name,
//       continent: req.body.continent
//     });
  
//     const countries = await Country.findAll();
  
//     res.render('index.ejs', {countries: countries});
//   });
  
module.exports = router;
