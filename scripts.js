
const in_usuario = document.getElementById('in_usuario');

const in_contrasena = document.getElementById('in_contrasena');

const in_carnet = document.getElementById('in_carnet');

const div_sesion = document.querySelector('.sesion');

_span = document.createElement('span');

div_sesion.appendChild(_span);

in_contrasena.disabled = true;
in_carnet.disabled = true;
in_materias.disabled = true;
in_pago.disabled = true;
//Validaciones de que los campo cumpla con las condiciones de caja negra
in_usuario.addEventListener('keyup', (e) => {

    if (in_usuario.value.length >= 5) {
        if (in_usuario.value.length <= 15) {
            _span.textContent = "Soy valido";
            _span.className = "correcto"
            in_contrasena.disabled = false;
        } else {
            in_contrasena.disabled = true;
            _span.textContent = "Soy incorrecto";
            _span.className = "incorrecto"
        }
    } else {
        in_contrasena.disabled = true;
        _span.textContent = "Soy incorrecto";
        _span.className = "incorrecto"
    }
});

in_contrasena.addEventListener('keyup', (e) => {

    if (in_contrasena.value.length >= 8) {
        console.log("soy valido");
        in_carnet.disabled = false;
    } else {
        in_carnet.disabled = true;
    }
});

in_carnet.addEventListener('keyup', (e) => {

    if (parseInt(in_carnet.value) >= 10000) {
        if (parseInt(in_carnet.value) <= 9999999999) {
            in_materias.disabled = false;
        } else {
            in_materias.disabled = true;
        }
    } else {
        in_materias.disabled = true;
    }
});

in_materias.addEventListener('change', (e) => {
    if (e.target.value == '') {
        console.log(" no es valido");
        in_pago.disabled = true;
    } else {
        console.log("Valido");
        in_pago.disabled = false;
    }
});
in_pago.addEventListener('change', (e) => {
    if (e.target.value == '') {
        console.log(" no es valido");
    } else {
        console.log("Valido");
    }
});


function validez( span,valido){

    var span = document.querySelector('#span_'+sapn);
    if (valido){

    }else{

    }

}
