function verificarSeleccion() {
    // Obtener los valores seleccionados en los selectores
    let seleccion1 = document.getElementById('password1').value;
    let seleccion2 = document.getElementById('password2').value;
    let seleccion3 = document.getElementById('password3').value;

    // Verificar las selecciones realizadas
    if (seleccion1 === '9' && seleccion2 === '1' && seleccion3 === '1') {
        mostrarResultado('Password 1 Correcto');
    } else if (seleccion1 === '7' && seleccion2 === '1' && seleccion3 === '4') {
        mostrarResultado('Password 2 Correcto');
    } else {
        mostrarResultado('Password incorrecto');
    }
}

function mostrarResultado(mensaje) {
    // Mostrar el mensaje de resultado en el párrafo correspondiente
    let resultadoParrafo = document.getElementById('resultado');
    resultadoParrafo.textContent = mensaje;
}