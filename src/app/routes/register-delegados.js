const connection = require('../../config/db.js');
const bcryptjs = require('bcryptjs');
const express = require('express');
const session = require('express-session');
const Swal = require('sweetalert2');
const app = express.Router();

app.get('/', (req, res) => {
    connection.query('SELECT * FROM Usuarios', (err, result) => {
        res.render("../views/delegados.ejs",{
            login: true,
            Usuarios: result
        }); 
    });
});

app.post('/crear', async (req, res) => {
    const {nombre,password,correo,rol} = req.body;
    let passwordHaash = await bcryptjs.hash(password,8);
    connection.query("SELECT * FROM Usuarios WHERE correo = ?", [correo], (err, result) => {
        if(result.length === 0){
            connection.query("INSERT INTO Usuarios SET?",{
                nombre:nombre,
                password:passwordHaash,
                correo:correo,
                rol:rol
            }, 
            (err, resultwo) => {
                if (err) {
                    console.log(err);
                    res.render('../views/error-window.ejs')
                } else {
                    res.redirect('/delegados');
                }
            });
        } else {
            res.render('../views/delegados.ejs',{
                alert: true,
                alertTitle: "Usuario ya existe",
                alertMessage: "Revise los datos para evitar réplicas",
                alertIcon: "error",
                showConfirmButton: false,
                timer: 15000,
                ruta: '/delegados'
            }); 
        }
    });
});

app.post('/modificar/:idUsuario', (req, res) => {
    const idUsuario = req.params.idUsuario;
    const {nombre,password,correo,rol} = req.body;
    connection.query('UPDATE Usuarios SET nombre = ?, password = ?, correo = ?, rol = ? WHERE idUsuario = ?', 
        [nombre,password,correo,rol, idUsuario], (err, result) => {
        if (err){
            console.log(err);
            res.render('../views/error-window.ejs')
        } else{
            res.redirect('/delegados');
        }	
    });
});

app.post('/eliminar/:idUsuario', (req, res) => {
    const id = req.params.idUsuario;
    connection.query('DELETE FROM Usuarios WHERE idUsuario = ?', [id], (err, result) => {
        if(err){
            console.log(err);
        } else{
            res.redirect('/delegados')
        }	
    });
}); 

module.exports = app;
