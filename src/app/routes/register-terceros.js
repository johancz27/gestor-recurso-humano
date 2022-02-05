const connection = require('../../config/db.js');
const express = require('express');
const session = require('express-session');
const Swal = require('sweetalert2');
const app = express.Router();

app.get('/', (req, res) => {
  connection.query('SELECT * FROM Tercero', (err, result) => {
    connection.query('SELECT * FROM PerfilAcademico', (err, result2) => {
      connection.query('SELECT * FROM PerfilProfesional', (err, result3) => {
        connection.query('SELECT * FROM ExperienciaConCentro', (err, result4) => {
          connection.query('SELECT * FROM Talento', (err, result5) => {
            connection.query('SELECT * FROM Publicaciones', (err, result6) => {
              res.render("../views/terceros/crear.ejs",{
                login: true,
                Tercero: result,
                PerfilAcademico: result2,
                PerfilProfesional: result3,
                ExperienciaConCentro: result4,
                Talento: result5,
                Publicaciones: result6
              });
            });  
          });
        });
      });
    });
  });
});

app.post('/insertar', async (req, res) => {
  const {
    tipo_id,idTercero,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,sexo,
    fecha_nacimiento,nacionalidad,telefono_movil,telefono_dos,nombre_emergencia,telefono_emergencia,
    correo_tercero,direccion,ciudad,estado_civil,hijos,cohabitantes,grupo_sangre,estado_salud,hoja_vida
  } = req.body;
  connection.query("SELECT * FROM Tercero WHERE idTercero = ?", [idTercero], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO Tercero SET ?",{
        tipo_id:tipo_id,
        idTercero:idTercero,
        primer_nombre:primer_nombre,
        segundo_nombre:segundo_nombre,
        primer_apellido:primer_apellido,
        segundo_apellido:segundo_apellido, sexo:sexo,
        fecha_nacimiento:fecha_nacimiento,
        nacionalidad:nacionalidad,
        telefono_movil:telefono_movil,
        telefono_dos:telefono_dos,
        nombre_emergencia:nombre_emergencia,
        telefono_emergencia:telefono_emergencia,
        correo_tercero:correo_tercero,
        direccion:direccion, ciudad:ciudad,
        estado_civil:estado_civil, hijos:hijos,
        cohabitantes:cohabitantes,
        grupo_sangre:grupo_sangre,
        estado_salud:estado_salud,
        hoja_vida:hoja_vida
      }, 
      (err, resultwo) => {
        if (err) {
          console.log(err);
          res.render('../views/error-window.ejs')
        } else {
          res.redirect('/crearTercero');
        }
      });
    } else {
      res.render('../views/terceros/crear.ejs',{
        alert: true,
        alertTitle: "Tercero ya existe",
        alertMessage: "Revise los datos para evitar réplicas.",
        alertIcon: "error",
        showConfirmButton: false,
        timer: 15000,
        ruta: '/crearTercero'
      }); 
    }
  });
});

app.post('/insertarEstudio', async (req, res) => {
  const {nombre_inst,nivel_academico,titulacion,soporte_academico} = req.body;
  connection.query("SELECT * FROM PerfilAcademico WHERE titulacion = ?", [titulacion], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO PerfilAcademico SET ?",{
        nombre_inst:nombre_inst,
        nivel_academico:nivel_academico,
        titulacion:titulacion,
        soporte_academico:soporte_academico
      }, 
      (err, resultwo) => {
        if (err) {
          console.log(err);
          res.render('../views/error-window.ejs')
        } else {
          res.redirect('/crearTercero')
        }
      });
    } else {
      res.render('../views/terceros/crear.ejs',{
        alert: true,
        alertTitle: "Estudio ya existe",
        alertMessage: "Revise los datos para evitar réplicas",
        alertIcon: "error",
        showConfirmButton: false,
        timer: 15000,
        ruta: '/crearTercero'
      }); 
    }
  });
});

app.post('/insertarTrabajo', async (req, res) => {
  const {tipo_entidad,nombre_entidad,cargo,tiempo,certificado_laboral,soporte_recon} = req.body;
  connection.query("INSERT INTO PerfilProfesional SET ?",{
    tipo_entidad:tipo_entidad,
    nombre_entidad:nombre_entidad,
    cargo:cargo, tiempo:tiempo,
    certificado_laboral:certificado_laboral,
    soporte_recon:soporte_recon
  }, 
  (err, resultwo) => {
    if (err) {
      console.log(err);
      res.render('../views/error-window.ejs')
    } else if (resultwo) {
      res.redirect('/crearTercero');
      /* res.render('../views/terceros/crear.ejs', {
        alert: true,
        alertTitle: "Registro exitoso",
        alertMessage: "Información guardada correctamente.",
        alertIcon: "success",
        showConfirmButton: false,
        timer: 15000,
        ruta: 'crearTercero'
      });  */
    }
  });
});

app.post('/insertarExperiencia', async (req, res) => {
  const {tipo_contrato,duracion,numero_convenio,puntuacion,escuela,centro,unidad,observaciones} = req.body;
  connection.query("SELECT * FROM ExperienciaConCentro WHERE numero_convenio = ?", [numero_convenio], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO ExperienciaConCentro SET ?",{
        tipo_contrato:tipo_contrato,
        duracion:duracion,
        numero_convenio:numero_convenio,
        puntuacion:puntuacion,
        escuela:escuela,
        centro:centro,
        unidad:unidad,
        observaciones:observaciones
      }, 
      (err, resultwo) => {
        if (err) {
          console.log(err);
          res.render('../views/error-window.ejs')
        } else {
          res.redirect('/crearTercero');
        }
      });
    } else {
      res.render('../views/terceros/crear.ejs',{
        alert: true,
        alertTitle: "Experiencia ya existe",
        alertMessage: "Revise los datos para evitar réplicas",
        alertIcon: "error",
        showConfirmButton: false,
        timer: 15000,
        ruta: '/crearTercero'
      }); 
    }
  });
});

app.post('/insertarTalento', async (req, res) => {
  const {nombre_talento,tiempo_realizarlo,ejercicio,soporte_talento} = req.body;
  connection.query("SELECT * FROM Talento WHERE nombre_talento = ?", [nombre_talento], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO Talento SET ?",{
        nombre_talento:nombre_talento,
        tiempo_realizarlo:tiempo_realizarlo,
        ejercicio:ejercicio,
        soporte_talento:soporte_talento
      }, 
      (err, resultwo) => {
        if (err) {
          console.log(err);
          res.render('../views/error-window.ejs')
        } else {
          res.redirect('/crearTercero');
        }
      });
    } else {
      res.render('../views/terceros/crear.ejs',{
        alert: true,
        alertTitle: "Talento ya existe",
        alertMessage: "Revise los datos para evitar réplicas",
        alertIcon: "error",
        showConfirmButton: false,
        timer: 15000,
        ruta: '/crearTercero'
      }); 
    }
  });
});


module.exports = app;

/*app.post('/insertar', async (req, res) => {
  const {
    tipo_id,idTercero,primer_nombre,segundo_nombre,primer_apellido,segundo_apellido,sexo,
    fecha_nacimiento,nacionalidad,telefono_movil,telefono_dos,nombre_emergencia,telefono_emergencia,
    correo_tercero,direccion,ciudad,estado_civil,hijos,cohabitantes,grupo_sangre,estado_salud,hoja_vida
  } = req.body;
  connection.query("SELECT * FROM Tercero WHERE idTercero = ?", [idTercero], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO Tercero SET ?",{
        tipo_id:tipo_id,
        idTercero:idTercero,
        primer_nombre:primer_nombre,
        segundo_nombre:segundo_nombre,
        primer_apellido:primer_apellido,
        segundo_apellido:segundo_apellido, sexo:sexo,
        fecha_nacimiento:fecha_nacimiento,
        nacionalidad:nacionalidad,
        telefono_movil:telefono_movil,
        telefono_dos:telefono_dos,
        nombre_emergencia:nombre_emergencia,
        telefono_emergencia:telefono_emergencia,
        correo_tercero:correo_tercero,
        direccion:direccion, ciudad:ciudad,
        estado_civil:estado_civil, hijos:hijos,
        cohabitantes:cohabitantes,
        grupo_sangre:grupo_sangre,
        estado_salud:estado_salud,
        hoja_vida:hoja_vida
      }, 
      (err, resultwo) => {
        if (err) {
          // res.render('../views/error-window.ejs')
          res.status(500).json({
            message: err
          })
        } else {
          res.json({
            tercero_id: idTercero
          })
        }
      });
    } else {
      res.status(400).json({
        message: {
          alert: true,
          alertTitle: "Tercero ya existe",
          alertMessage: "Revise los datos para evitar réplicas",
          alertIcon: "error",
          showConfirmButton: false,
          timer: 15000,
          ruta: '/crearTercero'
        }
      })
    }
  });
}); */

/*app.post('/insertarTrabajo', async (req, res) => {
  const {tipo_entidad,nombre_entidad,cargo,tiempo,certificado_laboral,soporte_recon} = req.body;
  connection.query("INSERT INTO PerfilProfesional SET ?",{
    tipo_entidad:tipo_entidad,
    nombre_entidad:nombre_entidad,
    cargo:cargo, tiempo:tiempo,
    certificado_laboral:certificado_laboral,
    soporte_recon:soporte_recon
  }, 
  (err, resultwo) => {
    if (err) {
      // res.render('../views/error-window.ejs')
      res.status(500).json({
        message: err
      })
    } else {
      res.json({
        tercero_id: idTercero
      })
    } 
  });
}); */

/*app.post('/insertarPublicacion', async (req, res) => {
  var idPerfilAcademico
  connection.query("SELECT idPerfilAcademico FROM PerfilAcademico", (err,result1) =>{
    result1 = idPerfilAcademico
  })
  const {tipo,titulo,tema,fecha_publicacion} = req.body;
  connection.query("SELECT * FROM Publicaciones WHERE titulo = ?", [titulo], (err, result) => {
    if(result.length === 0){
      connection.query("INSERT INTO Publicaciones SET ?",{
        tipo:tipo,
        titulo:titulo,
        tema:tema,
        fecha_publicacion:fecha_publicacion,
        idPerfilAcademico:idPerfilAcademico
      }, 
      (err, resultwo) => {
        if (err) {
          console.log(err);
          res.render('../views/error-window.ejs')
        } else {
          res.redirect('/crearTercero');
        }
      });
    } else {
      res.render('../views/terceros.ejs',{
        alert: true,
        alertTitle: "Publicación ya existe",
        alertMessage: "Revise los datos para evitar réplicas",
        alertIcon: "error",
        showConfirmButton: false,
        timer: 15000,
        ruta: '/crearTercero'
      }); 
    }
  });
}); 
*/

/* app.post('/modificar/:idUsuario', (req, res) => {
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
});  */