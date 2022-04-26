const express=require("express");
const morgan=require("morgan");
const path= require("path");//Hace que las rutas sean independientes de S.O
const app = express();
const { mongoose }=require("./database");
//Configuracion
app.set("port",process.env.PORT||3000) //Para despligue en servidor en la nube||local port 3000

//MiddleWares(Se ejecutan antes de las rutas)
app.use(morgan('dev'));//Devuelve informacion util sobre intercambio de datos entre C-S
app.use(express.json());//Comprueba que el formato de los datos es Json

//Rutas

app.use("/api/task",require("./routes/rutas.routes"));

//Static files(HTML/CSS)
//console.log(path.join(__dirname,"public"));//Devuelve la carpeta donde se encuentra ahora mismo ("src")+Lo une independientemente de S.O a la direccion que quiera
app.use(express.static(path.join(__dirname,"public")));//Por defecto encuentra la carpeta public

//Server Start
app.listen(app.get("port"),()=>{
    console.log(`Server on port ${app.get("port")}`);
});