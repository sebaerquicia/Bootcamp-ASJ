//traigo desde un JSON file los datos
fetch("./info.json")
  .then((respuesta) => respuesta.json())
  .then((productos) => principal(productos))
  .catch((error) => alert("Error al cargar"));

// funcion principal para renderizar por primera vez e inicializar el carrito, verificando el localStorage
function principal(productos) {
  let carritoRecuperado = localStorage.getItem("carrito");
  let carrito = carritoRecuperado ? JSON.parse(carritoRecuperado) : [];
  
  renderizarCarrito(carrito);
  renderizarProductos(productos, carrito);

  //agrego los listeners
  let botonRecarga = document.getElementById("recarga");
  botonRecarga.addEventListener("click", () =>
    renderizarProductos(productos, carrito)
  );

  //listener carrito
  let botonVerOcultar = document.getElementById("verOcultar");
  botonVerOcultar.addEventListener("click", verOcultarCarrito);
}

//funcion para renderizar los productos
function renderizarProductos(productos, carrito) {
  let contenedor = document.getElementById("contenedorProductos");
  contenedor.innerHTML = "";
  productos.forEach((producto) => {
    let tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <img class= "imagenProducto" src =./img/${producto.rutaImagen} />
    <p>Precio: $${producto.precio}</p>
    <p>Stock disponible: ${producto.stock}</p> 
    <button class="button1" id=${producto.id}>Agregar al carrito</button>`;
    contenedor.appendChild(tarjeta);
    let botonAgregarAlCarrito = document.getElementById(producto.id);
    botonAgregarAlCarrito.addEventListener("click", (e) =>
      agregarProductoAlCarrito(productos, e)
    );
  });
}

//funcion para agregar un producto al carrito
function agregarProductoAlCarrito(productos, e) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let productoBuscado = productos.find(
    (producto) => producto.id === Number(e.target.id)
  );
  let productoEnCarrito = carrito.find(
    (producto) => producto.id === productoBuscado.id
  );
  if (productoBuscado.stock > 0) {
    if (productoEnCarrito) {
      productoEnCarrito.unidades++;
      productoEnCarrito.subtotal =
        productoEnCarrito.unidades * productoEnCarrito.precio;
    } else {
      carrito.push({
        rutaImagen: productoBuscado.rutaImagen,
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precio: productoBuscado.precio,
        unidades: 1,
        subtotal: productoBuscado.precio,
      });
    }
    productoBuscado.stock--;
    alert(`Se agregó el producto ${productoBuscado.nombre} al carrito`);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarProductos(productos, carrito);
  } else {
    alert("No hay mas de este producto disponible");
  }
  renderizarCarrito(carrito);
}

//funcion principal para renderizar el carrito®
function renderizarCarrito(productosEnCarrito) {
  if (productosEnCarrito.length > 0) {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let total = carrito.reduce(
      (acum, productos) => acum + productos.subtotal,
      0
    );
    let divCarrito = document.getElementById("carrito");
    divCarrito.innerHTML = "";
    productosEnCarrito.forEach(
      ({ rutaImagen, nombre, precio, unidades, subtotal }) => {
        let tarjProductoCarrito = document.createElement("div");
        tarjProductoCarrito.classList.add("page");
        tarjProductoCarrito.innerHTML = `
      <img class= "imagenProductoCarrito" src =./img/${rutaImagen} />
      <h3>${nombre}</h3>
      <p>Precio: $${precio}</p>
      <p>${unidades} unidades agregadas</p>
      <p>$${subtotal}</p> `;
        divCarrito.appendChild(tarjProductoCarrito);
      }
    );
    let totalCompra = document.createElement("div");
    totalCompra.classList.add("estiloTotal");
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    divCarrito.appendChild(totalCompra);

    let boton = document.createElement("button");
    boton.classList.add("button1");
    boton.innerHTML = "Finalizar compra";
    boton.addEventListener("click", finalizarCompra);
    divCarrito.appendChild(boton);
  }
}

//funcion para finalizar la compra
function finalizarCompra() {
  let carrito = document.getElementById("carrito");
  carrito.innerHTML = "No hay productos en el carrito";
  localStorage.removeItem("carrito");
  alert("Compra realizada con EXITO");
  verOcultarCarrito();
}

//ver ocultar el carrito
function verOcultarCarrito() {
  let carrito = document.getElementById("carrito");
  let contenedorProductos = document.getElementById("contenedorProductos");
  carrito.classList.toggle("oculta");
  contenedorProductos.classList.toggle("oculta");
}
