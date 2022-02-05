const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_DATABASE
});

connection.connect((err)=>{
    if(err){
        console.log("El error con la DB es:" + err)
        return;
    }
    console.log("Conectado a la DB");
});

module.exports = connection;