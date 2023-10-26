function validl() {
    let mail = document.getElementById("mail");
    let clave = document.getElementById("clave");
    let error = false
    if (mail.value == "") {
        document.getElementById("validarmail").innerHTML = "Debe completar esta sección";
        error = true;
        mail.focus();

    } else { document.getElementById("validarmail").innerHTML = ""; }
    if (clave.value == "") {
        document.getElementById("validarclave").innerHTML = "Debe completar esta sección";
        error = true;
        clave.focus();

    }
    if (clave.value.length < 8) {
        document.getElementById("validarclave").innerHTML = "La contraseña tiene menos que 8 caracteres";
        error = true;
        clave.focus();

    } else { document.getElementById("validarclave").innerHTML = ""; }
    if (error == false) {
        document.getElementById("mail").value = "";
        document.getElementById("clave").value = "";
        document.getElementById("validarmail").innerHTML = "";
        document.getElementById("validarclave").innerHTML = "";
        alert("Ingreso exitoroso");
    }
    return !error

}
function validr() {
    let mail = document.getElementById("mailr");
    let clave = document.getElementById("claver");
    let telefono = document.getElementById("tele");
    let nombre = document.getElementById("nombre");
    let error = false
    if (mail.value == "") {
        document.getElementById("validarmailr").innerHTML = "Debe completar esta sección";
        error = true;
        mail.focus();
    } else { document.getElementById("validarmailr").innerHTML = ""; }
    if (clave.value.length < 8) {
        document.getElementById("validarclaver").innerHTML = "La contraseña tiene menos que 8 caracteres";
        error = true;
        clave.focus();

    } else { document.getElementById("validarclaver").innerHTML = ""; }
    if (clave.value == "") {
        document.getElementById("validarclaver").innerHTML = "Debe completar esta sección";
        error = true;
        clave.focus();

    }
    if (!((isNaN(parseInt(telefono))) &&  (telefono.value.length == 8  ))) {
        document.getElementById("validartele").innerHTML = "Entre un número de telefono valido";
        error = true;

    }
 else { document.getElementById("validartele").innerHTML = ""; }
    
    if (telefono.value == "") {
        document.getElementById("validartele").innerHTML = "Debe completar esta sección";
        error = true;
        telefono.focus();
    }

    if (nombre.value == "") {
        document.getElementById("validarnombre").innerHTML = "Debe completar esta sección";
        error = true;
        nombre.focus();
    } else { document.getElementById("validarnombre").innerHTML = ""; }

    if (error == false) {
        document.getElementById("validarmailr").innerHTML = "";
        document.getElementById("validarclaver").innerHTML = "";
        document.getElementById("validartele").innerHTML = "";
        document.getElementById("validarnombre").innerHTML = "";
        alert("Registro exitoso");
    }

    return !error

} 
