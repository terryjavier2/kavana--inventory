let inventario = [];

function agregarProducto() {
    const nombre = document.getElementById("nombre").value;
    const cantidad = document.getElementById("cantidad").value;
    const costo = document.getElementById("costo").value;

    if (nombre === "" || cantidad === "" || costo === "") {
        alert("Por favor completa todos los campos.");
        return;
    }

    inventario.push({
        nombre: nombre,
        cantidad: cantidad,
        costo: costo
    });

    mostrarInventario();

    document.getElementById("nombre").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("costo").value = "";
}

function mostrarInventario() {
    const lista = document.getElementById("listaInventario");

    lista.innerHTML = "";

    inventario.forEach((producto) => {
        lista.innerHTML += `
            <div style="border:1px solid #ccc;padding:10px;margin:10px 0;">
                <strong>${producto.nombre}</strong><br>
                Cantidad: ${producto.cantidad}<br>
                Costo: $${producto.costo}
            </div>
        `;
    });
}
