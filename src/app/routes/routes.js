const express = require('express');
const session = require('express-session');
const connection = require('../../config/db');
const app = require('../../config/server');
const router1 = require('./login');
const router2 = require('./register-terceros');
const router3 = require('./revisar-terceros');
const router4 = require('./register-delegados');


module.exports = app => {
    app.get('/', (req,res) => {
        res.render('../views/login.ejs');
    });
    app.use('/login', router1, (req,res) => {
        res.render('../views/login.ejs');
    });
    app.get('/index', (req,res) => {
        connection.query('SELECT * FROM Tercero', (err,result1)=>{
            res.render('../views/index.ejs',{
                Tercero:result1,
            });
        });
    });
    app.use('/crearTercero', router2, (req,res) => {
        res.render('../views/terceros/crear.ejs');
    });
    app.use('/revisarTercero', router3, (req,res) => {
        res.render('../views/terceros/revisar.ejs');
    });
    app.use('/delegados', router4, (req,res) => {
        res.render('../views/delegados.ejs');
    });
    app.get('/acercade', (req,res) => {
        res.render('../views/acercade.ejs');
    });
    app.get('/error-window', (req,res) => {
        res.render('../views/error-window.ejs');
    });
    
    /* app.get('/buscar', (req,res)=>{
        
    }) */


    

    app.get('/logout',(req,res)=>{
        req.session.destroy(()=>{
            res.redirect('/');
        })
    })
}

