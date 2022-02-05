$('ul.tabs li a:first').addClass('active');
$('.secciones article').hide();
$('.secciones article:first').show();

$('ul.tabs li a').click(function activeTabs() {
  $('ul.tabs li a').removeClass('active');
  $(this).addClass('active');
  $('.secciones article').hide();

  var activeTab = $(this).attr("href");
  $(activeTab).show();
  return false;
});

/* let buttonBack = document.getElementById('btn-back').addEventListener('click', function back() {
  $('.secciones article').hide();
  $('.secciones article#tab2').show();
}) */

/*const Swal = (require('sweetalert2'))
const host = window.location.origin

function get_field(form, field_name) {
  return form.find('[name="'+field_name+'"]').val()
}

const $form_tercero = $("#form-tercero")
$form_tercero.on("submit", (event) => {
  event.preventDefault()
  const form = $(event.target)
  const body = {
    tipo_id: get_field(form, "tipo_id"),
    idTercero: get_field(form, "idTercero"),
    primer_nombre: get_field(form, "primer_nombre"),
    segundo_nombre: get_field(form, "segundo_nombre"),
    primer_apellido: get_field(form, "primer_apellido"),
    segundo_apellido: get_field(form, "segundo_apellido"),
    sexo: get_field(form, "sexo"),
    fecha_nacimiento: get_field(form, "fecha_nacimiento"),
    nacionalidad: get_field(form, "nacionalidad"),
    telefono_movil: get_field(form, "telefono_movil"),
    telefono_dos: get_field(form, "telefono_dos"),
    nombre_emergencia: get_field(form, "nombre_emergencia"),
    telefono_emergencia: get_field(form, "telefono_emergencia"),
    correo_tercero: get_field(form, "correo_tercero"),
    direccion: get_field(form, "direccion"),
    ciudad: get_field(form, "ciudad"),
    estado_civil: get_field(form, "estado_civil"),
    hijos: get_field(form, "hijos"),
    cohabitantes: get_field(form, "cohabitantes"),
    grupo_sangre: get_field(form, "grupo_sangre"),
    estado_salud: get_field(form, "estado_salud"),
    hoja_vida: get_field(form, "hoja_vida"),
  }
  $.post({
    url: host+"/terceros/insertar",
    contentType: "application/json",
    data: JSON.stringify(body),
    dataType: "json"
  }).done((data) => {
    const tercero_id = data.tercero_id
    console.log("tercero_id: "+tercero_id);

    $('.secciones article').hide();
    $('.secciones article#tab2').show();
    // TODO: Colocar el valor de tecero_id en un campo oculto del formulario 2:
    // $('[name="campo"]').val(tercero_id)
    // Donde campo es: aq
  
    /* Swal.fire({ 
      alert: true,
      alertTitle: "¡Éxito!",
      alertMessage: "Información guardada correctamente.",
      alertIcon: "success",
      showConfirmButton: false,
      timer: 15000,
      ruta: '/terceros'
    }).then(result => {
      if(result.isConfirmed){
        $('.secciones article').hide();
        $('.secciones article#tab2').show();
      }
    });  
  }).fail(error => { 
    console.log(error.responseText)
    const error_obj = JSON.parse(error.responseText)
    /* if (error_obj.hasOwnProperty("alertMessage")) {
      Swal.fire({
        alert: true,
        alertTitle: error_obj.alertTitle,
        alertMessage: error_obj.alertMessage,
        alertIcon: error_obj.alertIcon,
        showConfirmButton: error_obj.showConfirmButton,
        timer: 15000,
        ruta: error_obj.ruta
      }); 
    } 
  })
})


const $form_PP = $("#form-PP")
$form_PP.on("submit", (event) => {
  event.preventDefault()
  const form2 = $(event.target)
  const body2 = {
    tipo_entidad: get_field(form2, "tipo_entidad"),
    nombre_entidad: get_field(form2, "nombre_entidad"),
    cargo: get_field(form2, "cargo"), tiempo: get_field(form2, "tiempo"),
    certificado_laboral: get_field(form2, "certificado_laboral"),
    soporte_recon: get_field(form2, "soporte_recon"),
  }
  $.post({
    url: host+"/terceros/insertarTrabajo",
    contentType: "application/json",
    data: JSON.stringify(body2),
    dataType: "json"

  }).done((data) => {
    //const tercero_id = data.tercero_id
    //console.log("tercero_id: "+tercero_id);
    
    $('.secciones article').hide();
    $('.secciones article#tab4').show();
  
    Swal.fire({ 
      alert: true,
      alertTitle: "¡Éxito!",
      alertMessage: "Información guardada correctamente.",
      alertIcon: "success",
      showConfirmButton: false,
      timer: 15000,
      ruta: '/terceros'
    }).then(result => {
      if(result.isConfirmed){
        $('.secciones article').hide();
        $('.secciones article#tab2').show();
      }
    });  
  }).fail(error => { 
    console.log(error.responseText)
    //const error2 = JSON.parse(error.responseText)
    if (error2.hasOwnProperty("alertMessage")) {
      Swal.fire({
        alert: true,
        alertTitle: error2.alertTitle,
        alertMessage: error2.alertMessage,
        alertIcon: error2.alertIcon,
        showConfirmButton: error2.showConfirmButton,
        timer: 15000,
        ruta: error2.ruta
      }); 
    } 
  })
}) */