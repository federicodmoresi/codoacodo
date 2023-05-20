let nombre = document.querySelector("#firstname");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let consulta = document.querySelector("#content");
let botonEnviar = document.querySelector("#boton-enviar");

function ValidarNombre() {
    let arrayNombre = nombre.value.toUpperCase();

    for (let i = 0; i < arrayNombre.length; i++) {

        if (arrayNombre.charCodeAt(i) != 32 && arrayNombre.charCodeAt(i) < 65 || arrayNombre.charCodeAt(i) > 90) {
            alert("Debe corregir el nombre: ' " + nombre.value[i] + " ' no es un caracter permitido")
            nombre.value = "";
            nombre.focus();
            return false;
        }
    }

    return true;

}

function ValidarEmail() {

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)) {


        return true;

    } else {
        alert("Debe corregir el email, compruebe el formato xxx@xxx.xxx")
        email.value = "";
        email.focus();
        return false;
    }
}

function ValidarTel() {

    for (let i = 0; i < tel.value.length; i++) {

        if (tel.value.charCodeAt(i) < 48 || tel.value.charCodeAt(i) > 57) {
            alert("Debe corregir el teléfono: ' " + tel.value[i] + " ' no es un caracter permitido")
            tel.value = "";
            tel.focus();
            return false;
        }
    }
    return true;

}

function validarDatos() {


    if (nombre.value == "" || email.value == "" || tel.value == "" || consulta.value == "") {

        alert("Debe completar todos los campos")
    } else {

        let nombreValido = ValidarNombre();
        let emailValido = ValidarEmail();
        let telValido = ValidarTel();

        if (nombreValido == true && emailValido == true && telValido == true) {
            alert("Mensaje enviado correctamente");
            nombre.value = "";
            email.value = "";
            tel.value = "";
            consulta.value = "";
        }

    }
}
botonEnviar.onclick = validarDatos;