const MContenido = document.getElementById("MContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContenido= document.getElementById("modalContenido")

const mates= [
    {
        id: 1,
        nombre: "Mate Imperial",
        precio: 25000,
        img: "/imagenes/imperial2.webp",
    },

    {
        id: 2,
        nombre: "Mate Camionero",
        precio: 21000,
        img: "/imagenes/Camionero.webp",
    },  

    {
        id: 3,
        nombre: "Mate de Madera",
        precio: 10000,
        img: "/imagenes/madera2.webp",
    },
    
    {
        id: 4,
        nombre: "Mate Torpedo",
        precio: 12000,
        img: "/imagenes/torpedo.jpg",
    },

    {
        id: 5,
        nombre: "Mate de Plástico",
        precio: 8000,
        img: "/imagenes/plastico.webp",
    },

    {
        id: 6,
        nombre: "Mate Termico de acero",
        precio: 5000,
        img: "/imagenes/metal2.webp",
    },

    {
        id: 7,
        nombre: "Bombillón pico de loro",
        precio: 12000,
        img: "/imagenes/bombilla1.webp",
    },

    {
        id: 8,
        nombre: "Bombilla pico de loro alpaca",
        precio: 8500,
        img: "/imagenes/bombilla2.webp",
    },

    {
        id: 9,
        nombre: "Bombilla pico de loro alpaca brasilera",
        precio: 8500,
        img: "/imagenes/bombilla3.webp",
    },

    {
        id: 10,
        nombre: "Bombilla pico de loro acero",
        precio: 8000,
        img: "/imagenes/bombilla4.webp",
    },

    {
        id: 11,
        nombre: "Bombilla recta de acero",
        precio: 8000,
        img: "/imagenes/bombilla5.webp",
    },

    {
        id: 12,
        nombre: "Bombilla pico de rey de alpaca",
        precio: 9000,
        img: "/imagenes/bombilla6.webp",
    },
]

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function actualizarCarrito() {
    modalContenido.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-titulo">Carrito</h1>`;

    modalContenido.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
    modalContenido.style.display = "none";
    });

    modalHeader.append(modalbutton);

    carrito.forEach((product) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-contenido";
        carritoContenido.innerHTML = `
            <img src="${product.img}">
            <p>${product.nombre}</p>
            <h3>$${product.precio}</h3>
        `;

    modalContenido.append(carritoContenido);
    });

    const total = carrito.reduce((acc, price) => acc + price.precio, 0);

        const totalcompra = document.createElement("div");
        totalcompra.className = "total-compra";
        totalcompra.innerHTML = `Total a pagar: $${total}`;
        modalContenido.append(totalcompra);
    }   ;

mates.forEach((product) => {
    let contenidoM = document.createElement("div");
    contenidoM.className = "product";
    contenidoM.innerHTML = `
        <img src="${product.img}">
        <p>${product.nombre}</p>
        <h3>$${product.precio}</h3>
    `;

    MContenido.append(contenidoM);

    let comprar = document.createElement("a");
    comprar.className = "boton";
    comprar.innerText = "Comprar";
    contenidoM.append(comprar);

    comprar.addEventListener("click", () => {
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,
    });
    console.log(carrito);  
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    });
});

verCarrito.addEventListener("click", () => {
    modalContenido.style.display = "block";
    actualizarCarrito();
});



/*
window.onload = function actualizarCarrito() {
    modalContenido.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `<h1 class="modal-header-titulo">Carrito</h1>`;

    modalContenido.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";
    modalbutton.addEventListener("click", () => {
    modalContenido.style.display = "none";
    });

    modalHeader.append(modalbutton);
    let carritoLocal = localStorage.getItem("carrito") 
    function objToString(obj){
        let objstring = '{ ';
        Object.entries(obj).forEach((elem) => {objstring += `${elem[0]}: ${elem[1]}, `})
        return objstring = objstring.slice(0, -2) + ' }'
            }
    carritoLocal.forEach((product) => {
        let carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-contenido";
        carritoContenido.innerHTML = `
            <img src="${product.img}">
            <p>${product.nombre}</p>
            <h3>$${product.precio}</h3>
        `;

    modalContenido.append(carritoContenido);
    });

    const total = carritoLocal.reduce((acc, price) => acc + price.precio, 0);

        const totalcompra = document.createElement("div");
        totalcompra.className = "total-compra";
        totalcompra.innerHTML = `Total a pagar: $${total}`;
        modalContenido.append(totalcompra);
    }*/