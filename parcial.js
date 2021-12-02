'use strict';

/*
 *  APELLIDOS
 */

let productos = [
    {
        id: 1,
        nombre: 'Pack de samples House Nov. 2021',
        descripcion: 'Pack de loops y sonidos para producir House',
        precio: 6000,
        imagen: 'imagenes/prod1.png',
        categoria: 'house',
    },
    {
        id: 2,
        nombre: 'Pack de Techno',
        descripcion: 'Pack de sonidos de Techno',
        precio: 8000,
        imagen: 'imagenes/prod2.jpg',
        categoria: 'techno',
    },
    {
        id: 3,
        nombre: 'Pack de Afro House',
        descripcion: 'Pack de sonidos Afro-House',
        precio: 4500,
        imagen: 'imagenes/prod3.jpg',
        categoria: 'house',
    },
    {
        id: 4,
        nombre: 'Pack de Progressive House',
        descripcion: 'Sonidos progressive house',
        precio: 7800,
        imagen: 'imagenes/prod4.jpg',
        categoria: 'house',
    },
    {
        id: 5,
        nombre: 'Pack de sonidos Techno Melódico',
        descripcion: 'Loops de melodic techno',
        precio: 9000,
        imagen: 'imagenes/prod5.jpg',
        categoria: 'techno',
    },
    {
        id: 6,
        nombre: 'Pack de sonidos MicroHouse',
        descripcion: 'Sonidos house minimal/micro',
        precio: 6500,
        imagen: 'imagenes/prod6.jpg',
        categoria: 'house',
    },
    {
        id: 7,
        nombre: 'Pack de sonidos Progressive',
        descripcion: 'Sonidos de Progressive',
        precio: 10500,
        imagen: 'imagenes/prod7.png',
        categoria: 'house',
    },
    {
        id: 8,
        nombre: 'Pack de sonidos Techno',
        descripcion: 'Sonidos techno',
        precio: 12500,
        imagen: 'imagenes/prod8.jpg',
        categoria: 'techno',
    },
    {
        id: 9,
        nombre: 'Pack de sonidos Indie',
        descripcion: 'Sonidos Indie',
        precio: 8500,
        imagen: 'imagenes/prod9.jpg',
        categoria: 'indie',
    },
   
];
let carrito = {
    ids : [],
    cant : [],
    total: 0,

};
const listadoProductos = document.getElementById('productos-destacados');
listadoProductos.setAttribute('class', 'row container-fluid mx-auto')

for (let producto of productos){
    const div = document.createElement('div');
    const contenedorImg = document.createElement('div');
    const imagen = document.createElement('img');
    const contenedor = document.createElement('div');
    const tituloProducto = document.createElement('h3');
    const precio = document.createElement('p');
    const boton = document.createElement('btn');


    div.style.backgroundColor = `white`;
    div.setAttribute('class', 'item col-12 mb-2 col-md-4 p-0 d-block container-fluid mx-auto')
    contenedorImg.append(imagen);
    imagen.src = `${producto.imagen}`
    imagen.setAttribute(`class`, 'imagen img-fluid');
    imagen.alt = producto.nombre;
    contenedor.setAttribute(`class`, 'py-2');
    contenedor.append(tituloProducto, precio, boton);
    tituloProducto.innerHTML = producto.nombre;
    tituloProducto.setAttribute('class', 'nombreProd text-center d-flex justify-center mx-auto');
    precio.innerHTML = `$ ${producto.precio}`;
    precio.setAttribute(`class`, 'precio mx-auto');
    boton.innerHTML = `Agregar al carrito`;
    boton.style.backgroundColor = '#00FFFF';
    boton.setAttribute('class', 'btn-agregar');
    boton.dataset.id = `${producto.id}`;
    boton.dataset.precio = `${producto.precio}`;
    boton.dataset.categoria = `${producto.categoria}`;
    div.append(imagen, contenedor);
    listadoProductos.append(div);



}

console.log(listadoProductos);


const addToCart = document.querySelectorAll('.btn-agregar');
    addToCart.forEach(botonAgregar => {
        botonAgregar.addEventListener('click', addClickeado);

    });

function addClickeado(e){
    const boton = e.target;
    const item = boton.closest('.item');

    const itemTitle = item.querySelector('.nombreProd').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImage = item.querySelector('.imagen').src;


   
    addItemToShoppingCart(itemImage, itemPrice, itemTitle)
 
}

const shoppingCartItems = document.querySelector('.shoppingCartItems');

function addItemToShoppingCart(itemImage, itemPrice, itemTitle){
    const shoppingCartRow = document.createElement('div');
    const shoppingCartContent = document.createElement('div');
    const contenedor2 = document.createElement('div');
    const imagenProd = document.createElement('img');
    const title = document.createElement('h4');

    const divPrecio = document.createElement('div');
    const textoPrecio = document.createElement('p');

    const divCantidad = document.createElement('div');
    const inputCant = document.createElement('input');
    const botonEliminar = document.createElement('button');


    shoppingCartContent.setAttribute('class', 'row');
    contenedor2.setAttribute('class', 'col-6');
    imagenProd.src = `${itemImage}`;
    imagenProd.setAttribute = ('class' , 'shopping-cart-image');
    title.setAttribute = ('class', 'shopping-cart-item-title');
    title.textContent = `${itemTitle}`;
    divPrecio.setAttribute = ('class', 'shopping-cart-price');
    textoPrecio.setAttribute = ('class' , 'item-price');
    textoPrecio.textContent = `${itemPrice}`;

    divCantidad.setAttribute = ('class', 'shopping-cart-quantity d-flex justify-content-between');
    inputCant.setAttribute = ('class', 'shopping-cart-quantity-input');
    botonEliminar.setAttribute('class', 'button-delete btn btn-danger');

    shoppingCartRow.innerHTML = shoppingCartContent;
    shoppingCartItems.append(shoppingCartRow);


}



//for (item of carrito){
  //  const contenedor = document.createElement('div');
    //const botonCerrar = document.createElement('a');
//    botonCerrar.textContent = 'X';

  //  const listaCarrito = document.createElement('ul');
    //const itemCarrito = document.createElement('li');

    
    //const btnVaciar = document.createElement('button');
    //const btnComprar = document.createElement('button');

    //contenedor.style.backgroundColor = '#00FFFF';
   // contenedor.setAttribute('class' , 'col-md-12');

    ///itemCarrito


//}


/*const addProduct = (e) => {
    let id = parseFloat(e.target.dataset.id);
    let precio = parseFloat(e.target.dataset.precio);

    let indiceProducto = carrito.ids.indexOf(id);

    if(indiceProducto == -1){
        carrito.ids.push(id);
        carrito.cant.push(1);
    }else{
        carrito.cant[indiceProducto]++;
    }

carrito.total += precio;

let cantidadProductos = carrito.ids.length;
let notiCarrito = document.querySelector('.notifCarrito');
notiCarrito.innerHTML = cantidadProductos;

};

let iconCarrito = document.querySelector('.iconcarrito');
let modalCarrito = document.createElement('div');
modalCarrito.className = ('carrito overflow-auto container-fluid p-0');

iconCarrito.addEventListener('click' , (e) => {

})*/



