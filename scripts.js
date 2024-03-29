
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
            validez('usuario', true);
            in_contrasena.disabled = false;
        } else {
            in_contrasena.disabled = true;
            validez('usuario', false);
        }
    } else {
        in_contrasena.disabled = true;
        validez('usuario', false);
    }
});

in_contrasena.addEventListener('keyup', (e) => {

    if (in_contrasena.value.length >= 8) {
        validez('contrasena', true);
        in_carnet.disabled = false;
    } else {
        validez('contrasena', false);
        in_carnet.disabled = true;
    }
});

in_carnet.addEventListener('keyup', (e) => {

    if (parseInt(in_carnet.value) >= 10000) {
        if (parseInt(in_carnet.value) <= 9999999999) {
            in_materias.disabled = false;
            validez('carnet', true);
        } else {
            in_materias.disabled = true;
            validez('carnet', false);
        }
    } else {
        in_materias.disabled = true;
        validez('carnet', false);
    }
});

in_materias.addEventListener('change', (e) => {
    if (e.target.value == '') {
        validez('materias', false);
        in_pago.disabled = true;
    } else {
        validez('materias', true);
        in_pago.disabled = false;
    }
});
in_pago.addEventListener('change', (e) => {
    if (e.target.value == '') {
        validez('pago', false);
    } else {
        validez('pago', true);
    }
});


function validez(span, valido) {


    var _span = document.querySelector('#spa_' + span);
    console.log(_span);
    if (valido) {
        _span.textContent = "input valido";
        _span.className = "correcto"
    } else {
        _span.textContent = "input invalido";
        _span.className = "incorrecto"
    }

}
