const connection = require('../../config/db.js');
const express = require('express');
const session = require('express-session');
const app = express.Router();


app.get('/', (req,res) => {
  connection.query('SELECT * FROM Tercero', (err, result1) => {
    connection.query('SELECT * FROM PerfilAcademico', (err, result2) => {
      connection.query('SELECT * FROM PerfilProfesional', (err, result3) => {
        connection.query('SELECT * FROM ExperienciaConCentro', (err, result4) => {
          connection.query('SELECT * FROM Talento', (err, result5) => {
            res.render('../views/terceros/revisar.ejs',{
              Tercero: result1,
              PerfilAcademico: result2,
              PerfilProfesional: result3,
              ExperienciaConCentro: result4,
              Talento: result5,
            });
          });  
        });
      });
    });
  });
});

app.get('/mostrar/:idTercero', (req,res) => {
  const idTercero = req.params.idTercero;
  connection.query('SELECT * FROM Tercero WHERE idTercero = ?',[idTercero], (err,result)=>{
    connection.query('SELECT * FROM PerfilAcademico', (err, result2) => {
      connection.query('SELECT * FROM PerfilProfesional', (err, result3) => {
        connection.query('SELECT * FROM ExperienciaConCentro', (err, result4) => {
          connection.query('SELECT * FROM Talento', (err, result5) => {
            
            res.render('../views/terceros/revisar.ejs',{
              Tercero: result,
              PerfilAcademico: result2,
              PerfilProfesional: result3,
              ExperienciaConCentro: result4,
              Talento: result5,
            });
          });  
        });
      });
    });
  })
})

module.exports = app;