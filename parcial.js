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
    div.setAttribute('class', 'col-12 mb-2 col-md-4 p-0 d-block container-fluid mx-auto')
    contenedorImg.append(imagen);
    imagen.src = `${producto.imagen}`
    imagen.setAttribute(`class`, 'img-fluid');
    imagen.alt = producto.nombre;
    contenedor.setAttribute(`class`, 'py-2');
    contenedor.append(tituloProducto, precio, boton);
    tituloProducto.innerHTML = producto.nombre;
    tituloProducto.setAttribute('class', 'nombreProd text-center d-flex justify-center mx-auto');
    precio.innerHTML = `$ ${producto.precio}`;
    precio.setAttribute(`class`, 'mx-auto');
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

const carrito = [];
const total = 0;

const agregarProducto = (e) => {
    /*const id = parseFloat(e.target.dataset.id);
    let precio = parseFloat(e.target.dataset.precio);


    // busco si está en el carrito, si está da el indice sino 1 
    let indiceProducto = carrito.ids.indexOf(id);

    if(indiceProducto == -1){
        carrito.ids.push(id);
        carrito.cantidad.push(1);
    }else {
        carrito.cantidad[indiceProducto]++; //si el producto está, se incrementa
    }

    carrito.total += precio;

    const cantidadProductos = carrito.ids.length;
    const iconoCarrito = document.querySelector('.notificacion-carrito');
    iconoCarrito.innerHTML = cantidadProductos;*/

    carrito.push(e.target.getAttribute('btn-agregar'))


}

console.log(carrito);