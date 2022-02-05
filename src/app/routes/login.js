const express = require('express');
const session = require('express-session');
const bcryptjs = require('bcryptjs');
const connection = require('../../config/db');
const app = express.Router();


app.get('/', (req,res)=>{
  res.render('../views/login.ejs',{
    login:true
  })
})

app.post('/auth', async(req,res) => {
  /* Inicio de sesión (autenticación) */
  const {correo,password,rol} = req.body;
  if(correo && password && rol){
    connection.query('SELECT * FROM Usuarios WHERE correo = ? AND rol = ?', [correo,rol], async(error,result)=>{
        
      if (error) {
          console.log(error);
          
      } else if (result.length !== 0 && (await bcryptjs.compare(password,result[0].password))){
        req.session.loggedin = true;
        connection.query('SELECT * FROM Tercero', (err,result)=>{
          res.render('../views/index.ejs',{
            Tercero:result,
            alert: true,
            alertTitle: "Ingreso exitoso",
            alertMessage: "Credenciales válidas",
            alertIcon: "success",
            showConfirmButton: false,
            timer: 15000,
            ruta: 'index'
          });
        });
      } else {
        /* Inicio de sesion incorrecto: Alguno de los datos no coincide*/
        res.render('../views/login.ejs',{
            alert: true,
            alertTitle: "No se pudo iniciar sesión",
            alertMessage: "Datos inválidos",
            alertIcon: "error",
            showConfirmButton: false,
            timer: 15000,
            ruta: '/'
        });
      }
        
    })
  } 
})

module.exports = app;