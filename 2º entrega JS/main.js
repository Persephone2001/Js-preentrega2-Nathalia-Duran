// Constantes globales
const hongos = [
    { id: 1, nombre: `Gírcolas`, precio: 4000 },
    { id: 2, nombre: `Melena de león`, precio: 5000 },
    { id: 3, nombre: `Portobello`, precio: 4000 },
    { id: 4, nombre: `Shiitake`, precio: 5000 },
    { id: 5, nombre: `Champiñón`, precio: 4000 }
];

// Lista de productos
const listahongos = document.querySelector('ul');

hongos.forEach(producto => {
    const hongosElemento = document.createElement('li');
    hongosElemento.innerText = producto.nombre;
    listahongos.appendChild(hongosElemento);
});

// Asociar evento click a los elementos de la lista
showFormButton.addEventListener('click', function(event) {
    const nombreProducto = event.target.innerText;
    const productoSeleccionado = document.getElementsByClassName(producto => producto.nombre === nombreProducto);

    if (productoSeleccionado) {
        const cantidad = parseInt(prompt(`Ingrese la cantidad de ${nombreProducto}:`), 10);
        if (!isNaN(cantidad)) {
            const resultado = multiplicar(productoSeleccionado.precio, cantidad);
            alert(`Monto a pagar por ${cantidad} ${nombreProducto}: $${resultado}`);
        } else {
            alert('Cantidad inválida');
        }
    }
});

// Función para multiplicar
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}