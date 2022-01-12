const path= require('path');
const express=require('express');
const {engine}= require('express-handlebars');
const { extname } = require('path');

const app=express();

const PORT=8080;


app.use(express.static('public'));




app.engine('handlebars', 
engine({
   extname:'hbs',
   defaultLayout:'listaProductos.hbs',
   layoutsDir: path.resolve(__dirname,"./views/layouts"),
   partialsDir: path.resolve(__dirname,"./views/partials")
}
));
app.set('view engine', 'handlebars');
app.set('views', "./views");

app.get("/productos",(req,res)=>{
   res.render("index",{
      nombre:"",
      cedula:""
   })
})

app.post("/productos",(req,res)=>{
   res.redirect("/")
})


app.listen(PORT,()=>{
   console.log(`Servidor escuchando por el puerto ${PORT}`)
})





