const express = require("express");

const expressHandlebars = require("express-handlebars").engine;

const app = express();

//const hasSubscribers=require('')

// Настройка механизма представлений Handlebars.

exports.webServer=()=>{

app.engine('handlebars', expressHandlebars({

  defaultLayout: 'main',

  }))

app.set('view engine', 'handlebars')

const port = process.env.port || 3000;

//const router=express.Router();
//const path=require('path');
// app.use((req, res) => {
//   res.type("text/plain");
//   res.status(404);
//   res.send("404 - NOT_FOUND");
//   console.log(path);
// });
// console.log(path)
// Пользовательская страница 404

//app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public'));

app.get("/", (req, res) => res.render("home"));

app.get('/about', (req, res) => {
  
  res.render('about', { fortune: fortune.getFortune() })
  })

app.use((req, res) => {
  res.status(404);
  res.render("404");
});
app.use((err, req, res, next) => {
  console.error(err.message);
  res.type("text/plain");
  res.status(500);
  res.render("500");
});
//module.exports=router;
app.listen(port, () =>
  console.log(
    `Express was start on http://localhost:${port};` + `push Ctr+c for stop it`
  )
);
  }