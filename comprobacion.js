var nombre = document.getElementById('txtNombre');
var telefono = document.getElementById('txtTelefono');
var correo = document.getElementById('txtCorreo');
var mensaje = document.getElementById('txtMensaje');
var error = document.getElementById('error');
error.style.color = 'red';
function enviarFormulario(){
    console.log('Enviando formulario...');
    var mensajesError = [];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(telefono.value === null || telefono.value === ''){
        mensajesError.push('Ingresa tu número de telefono');
    }
    if(correo.value === null || correo.value === ''){
        mensajesError.push('Ingresa tu correo');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Ingresa tu mensaje');
    }
    error.innerHTML = mensajesError.join(',');

    
    return false;
}