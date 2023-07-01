let usuario = document.querySelector("#usuario");
let password = document.querySelector("#password");
let boton=document.querySelector('#boton_ingresar');

const user="admin"
const pass="12345"

let contador=0

function accesoAlSistema(){
    if(contador<4){
        if( user == usuario.value && pass == password.value ) {
            alert("Bienvenido al sistema " + user);
            window.location.href = "sistemaInterno.html";
            contador=0
        } else {
            alert("inicio de sesión inválido. Favor intente de nuevo");
        }
        contador++;
    }else{
        alert("Demasiados intentos fallidos")
    }
}
boton.onclick=accesoAlSistema;