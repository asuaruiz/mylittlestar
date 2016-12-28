
$(document).ready(function(){
  $('#btnForm').click(sendData);
});



function sendData(){
  var name = $('#inputName').val();
  var email = $('#inputEmail').val();
  var phone = $('#inputPhone').val();
  var mensaje = $('#mensaje').val();

  var data = {
    name: name,
    email: email,
    phone: phone,
    mensaje: mensaje
  };

  if(!validateInputs(data)){
    return; // Detiene la ejecución
  }


  $.post("<?php echo dirname($_SERVER["PHP_SELF"])?>server/contacto.php", data)
  .done(function(){ }).fail(function(){ });

}

function validateInputs(){

  if(!validator.isEmail(data.email)) return false;

  if(!validator.isAlpha(data.name) || !validator.isLength(name, { min: 3, max: 20})) return false;

  if(!validator.isNumeric(data.phone)) return false;

  return true;
}
