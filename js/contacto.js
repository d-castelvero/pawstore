console.log('formulario de contacto');

let contacto = []

function mensaje() {

    let nombre = document.getElementById('nombre');
    if (nombre.value === '' || nombre.value == null) {

        messages.push('Ingresa un nombre')
    }
    let apellido = document.getElementById('apellido');
    if (apellido.value === '' || apellido.value == null) {

        messages.push('ingresa apellido')
    }
    let email = document.getElementById('email');
    if (email.value === '' || email.value == null) {

        messages.push('ingresa email')
    }

    let comentario = document.getElementById('comentario').value;

    contacto.push(nombre, apellido, email, comentario)

    const mensajes = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        comentario: comentario,
    }
    console.log(mensajes);
    contacto.push(mensajes);
    console.log(contacto);
    console.log('mensaje enviado');
    alert('Mensaje enviado, muchas gracias!');
    location.reload();
}