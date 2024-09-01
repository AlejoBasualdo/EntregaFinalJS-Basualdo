
//Dar la bienvenida al usuario / Funcion
function bienvenidaCliente(nombre) {
    alert ('Bienvenido a nuestra pagina ' + nombre)
}
let bienvenida = document.getElementById('bienvenidaSemantica')
let inputUsuario = document.getElementById('nombreCliente')
bienvenida.onclick = (ev) => {
    bienvenidaCliente(inputUsuario.value)
}