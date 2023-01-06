// entry-point de MERCADO LIEBRE - MÓDULO 04 //

// (paso 0) armado de archivos y carpetas //

/* 
Al armar un nuevo proyecto debo:
a. crear carpeta principal en mi PC,
b. dentro de ella crear archivo entry-point, suele llamarse app.js (este archivo),
c. por consola dar inicio al proyecto mediante npm init -> armará archivo package.json con datos del proyecto,
d. instalar express mediante npm install express -> descargará su propia carpeta de modulos (carpeta muy pesada para cargar en gitHub, ojo),
d.1. si clono otros proyectos no hace falta instalar express mediante npm install express, sólo con npm install. Ya se encontraría detallado en package.json
e. armar carpetas: public (subcarpetas: img, css, js); src (subcarpetas: views con archivos html; archivos: puede ir app.js aquí dentro).
*/

// (paso 1) constantes inicializadoras //

const express = require("express");                 // requerimiento del paquete de express (previamente instalado con npm install express en consola).
const app = express();                              // ejecuto express a través del objeto app.
const path = require("path");                       // requerimiento de path para lectura de rutas en distintos sistemas operativos.
const PORT = process.env.PORT || 3000;                                  // establezco un puerto.

// (paso 3) establecer public como carpeta de archivos públicos //

const publicPath = path.resolve("./public");       // path me permite usar la raiz; .resolve o .join unir las rutas; si uso .join va con __dirname para unir.
console.log(publicPath);                            // sólo muestra por consola la ubicación de carpeta public (para chequear nada más).
app.use(express.static(publicPath));                // establece a la ubicación como recurso estático en el objeto que ejecuta express.

// (paso 4) respuestas al cliente según ruta requerida //

// anatomía del código -> app.get("/", (req, res) => res.send("hola mundo")); 
// En este caso utilizo método de petición HTTP - get -. Otros métodos que podría usar son post, put, patch, delete. El método consta de dos parámetros: el 1ro es la ruta, en este caso "/" que es algo asi como el "home" o página de inicio. podría ser por ejemplo "/contacto", "/productos", etc. rutas relativas a las que accede el cliente en nuestro sitio. El 2do es la función callback (req, res) donde responderemos "enviando" (.send) en este caso un breve mensaje. Usamos .sendFile para enviar archivos (el HTML que iremos armando):

app.get("/",(req,res) => res.sendFile(path.resolve("views/home.html")));       // con método path.resolve o path.join indico dónde se encuentra y cómo se llama (en este caso home.html) el archivo que quier mostrar como RESpuesta al REQuerimiento.

app.get("/login", (req,res) => res.sendFile(path.join(__dirname, "/views/login.html")));

app.get("/register", (req,res) => res.sendFile(path.join(__dirname, "/views/register.html")));

// (paso 2) levantando el servidor //

app.listen(PORT, () => console.log("server running on port " + PORT));      // módulo de express ".listen" me permite levantarlo.



