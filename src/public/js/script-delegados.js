/* Iterador de modals */
var modals = document.getElementsByClassName('edit-modal');

for (let i = 0; i < modals.length; i++) {
  var modal = modals[i]
  modal.addEventListener('shown.bs.modal', function () {
    var firstInput = this.querySelector('[name="nombre"]');
    firstInput.focus()
  });
}

/* Eliminar delegados con Swal */
var forms = document.getElementsByClassName('form-delete-delegado');

for (let i = 0; i < forms.length; i++) {
  var form = forms[i]
  
  form.addEventListener('submit', function(evt) {
    var form = this;
    evt.preventDefault(); // <--- prevent form from submitting
  
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#780d80',
      cancelButtonColor: '#dc3545',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminado!',
          'El usuario ha sido eliminado.',
          'success'
        ).then(function(){
          form.submit();
        }); 
      }
    })
  });
}
