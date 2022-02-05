const app = require('./config/server.js');
const connection = require('./config/db.js');

require('./app/routes/routes.js')(app);

//Configurar para que el puerto sea escuchado

app.listen(app.get('port'),() =>{
    console.log("Servidor en el puerto: ", app.get('port'));
})
