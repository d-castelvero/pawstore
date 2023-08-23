

/* formulario inicio sesion */

let userpaw = 'lau.garcia@gmail.com'
let passpaw = 'garcia'
let namepaw = 'Laura Garcia'


const formpaw = document.getElementById('form')
console.log(formpaw);


const validarformpaw = (e) => {
    e.preventDefault()
    console.log(e)
    console.log(formpaw.emailLogin.value)
    console.log(formpaw.passwordLogin.value)
    console.log(formpaw.userName.value)


    let user = formpaw.emailLogin.value
    let pass = formpaw.passwordLogin.value
    let name = formpaw.userName.value


    if (namepaw == name && userpaw == user && passpaw == pass) {
        alert('Bienvenido al Store de Paw!');
        location.href = './cuenta.html'
    } else {
        var mensaje = document.createElement("span");
        mensaje.innerHTML = "Datos incorrectos!";
        mensaje.style.color = "red";
        document.getElementById("form").appendChild(mensaje);
        document.getElementById("form").reset();

    }
}

formpaw.onsubmit = validarformpaw


