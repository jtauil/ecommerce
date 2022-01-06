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
        categoria: 'House',
    },
    {
        id: 2,
        nombre: 'Pack de Techno',
        descripcion: 'Pack de sonidos de Techno',
        precio: 8000,
        imagen: 'imagenes/prod2.jpg',
        categoria: 'Techno',
    },
    {
        id: 3,
        nombre: 'Pack de Afro House',
        descripcion: 'Pack de sonidos Afro-House',
        precio: 4500,
        imagen: 'imagenes/prod3.jpg',
        categoria: 'House',
    },
    {
        id: 4,
        nombre: 'Pack de Progressive House',
        descripcion: 'Sonidos progressive house',
        precio: 7800,
        imagen: 'imagenes/prod4.jpg',
        categoria: 'Progressive House',
    },
    {
        id: 5,
        nombre: 'Pack de sonidos Techno Melódico',
        descripcion: 'Loops de melodic techno',
        precio: 9000,
        imagen: 'imagenes/prod5.jpg',
        categoria: 'Techno',
    },
    {
        id: 6,
        nombre: 'Pack de sonidos MicroHouse',
        descripcion: 'Sonidos house minimal/micro',
        precio: 6500,
        imagen: 'imagenes/prod6.jpg',
        categoria: 'House',
    },
    {
        id: 7,
        nombre: 'Pack de sonidos Progressive',
        descripcion: 'Sonidos de Progressive',
        precio: 10500,
        imagen: 'imagenes/prod7.png',
        categoria: 'Indie',
    },
    {
        id: 8,
        nombre: 'Pack de sonidos Techno',
        descripcion: 'Sonidos techno',
        precio: 12500,
        imagen: 'imagenes/prod8.jpg',
        categoria: 'Techno',
    },
    {
        id: 9,
        nombre: 'Pack de sonidos Indie',
        descripcion: 'Sonidos Indie',
        precio: 8500,
        imagen: 'imagenes/prod9.jpg',
        categoria: 'Indie',
    },
   
];
const miniCarrito = document.getElementById('verCarrito');


let btnSeeCart = document.createElement('button');
btnSeeCart.style.background = 'grey';
btnSeeCart.innerHTML = 'Ver carrito';
btnSeeCart.style.borderStyle = 'solid';
btnSeeCart.setAttribute('class', 'btn-verCarrito m-4')
miniCarrito.append(btnSeeCart);
btnSeeCart.addEventListener('click', e => {
    seeCart(e);


   
    
});

let btnFiltro = document.querySelectorAll('.btnFiltro')
console.log(btnFiltro);
btnFiltro.forEach(el => el.addEventListener('click', e =>{
    filtroCategoria(el.innerHTML);
}));





const listadoProductos = document.createElement('div');
document.body.append(listadoProductos);
listadoProductos.setAttribute('class', 'row container-fluid mx-auto mb-5');




let cont = 0;
let total = 0;
let pTotal ;

for (let producto of productos){
    const div = document.createElement('div');
    const contenedorImg = document.createElement('div');
    const imagen = document.createElement('img');
    const contenedor = document.createElement('div');
    const tituloProducto = document.createElement('h3');
    const descripcion  = document.createElement('p');
    const categoria = document.createElement('p');
    const precio = document.createElement('p');
    const boton = document.createElement('btn');


    div.style.backgroundColor = `white`;
    div.setAttribute('class', 'item col-4 mb-5 col-md-4 p-0 d-block mx-auto')
    contenedorImg.append(imagen);
    imagen.src = `${producto.imagen}`
    imagen.setAttribute(`class`, 'imagen img-fluid');
    imagen.alt = producto.nombre;
    contenedor.setAttribute(`class`, 'py-2');
    contenedor.append(tituloProducto, precio, descripcion,categoria, boton);
    tituloProducto.innerHTML = producto.nombre;
    tituloProducto.setAttribute('class', 'nombreProd text-center d-flex justify-center mx-auto');
    descripcion.innerHTML = `${producto.descripcion}`;
    descripcion.setAttribute('class', 'mx-auto');
    categoria.innerHTML = `Género: ${producto.categoria}`;

    precio.innerHTML = `$ ${producto.precio}`;
    precio.setAttribute(`class`, 'precio mx-auto');
    boton.innerHTML = `Agregar al carrito`;
    boton.style.backgroundColor = 'white';
    boton.style.borderStyle = 'solid';
    boton.setAttribute('class', 'btn-agregar p-3');
    boton.dataset.id = `${producto.id}`;
    boton.dataset.precio = `${producto.precio}`;
    boton.dataset.categoria = `${producto.categoria}`;
    boton.addEventListener('click', e => {
        addToCart(e);
        pTotal = document.getElementById('total');
        total += producto.precio;
        pTotal.innerHTML = total;
 

    })
    
    div.append(imagen, contenedor);
    listadoProductos.append(div);


}
let carrito = {
    ids : [],
    cantidad : [],
    total : 0,

}


let indiceProducto;


const filtroCategoria  = (e) => {
    let arrayHouse = productos.filter((b) => { return b.categoria == e});
    
    console.log(arrayHouse);
    
}

const  addToCart = (e) => {

    let id = parseFloat(e.target.dataset.id);
    let precio = parseFloat(e.target.dataset.precio);

    let indiceProducto = carrito.ids.indexOf(id);

    if (indiceProducto === -1){
        carrito.ids.push(id);
        carrito.cantidad.push(1);
    
    }else {
        carrito.cantidad[indiceProducto]++;

    }

    let contador = document.getElementById('itemsProd');
    cont ++;

    contador.innerHTML = cont;

 
}


const seeCart = (e) => {


    const divCarrito = document.createElement('div');
    const divModal = document.createElement('div');
 
    divModal.id = 'modalCarrito';
    divModal.style.display = 'block';
    divModal.style.height = '1000px;'
    divModal.style.position = 'absolute';
    document.body.append(divModal);

   

    carrito.ids.forEach(id => {
        console.log(carrito.ids);
        const producto =  productos.find(x => x.id === id) // find objeto tal que x.id sea igual a id 
        const divProducto = document.createElement('div');
        const divImg = document.querySelector('div');
        const itemImg = document.createElement('img');
        const divTexto = document.createElement('div');
        const itemTitle = document.createElement('h3');
        const itemPrecio = document.createElement('p');
        const divAdd = document.createElement('div');
        const addBtn = document.createElement('button');
        const delBtn = document.createElement('button');
       

        divProducto.style.backgroundColor = 'white';
        divProducto.setAttribute('class', 'col-12');
        divImg.setAttribute('class', 'divImgCarrito');
        divImg.append(itemImg);
        itemImg.src = producto.imagen;
        itemImg.setAttribute = ('class', 'imgCarrito');
        itemImg.style.height = '200 px';
        itemImg.style.width = '200px';
        itemImg.alt = producto.nombre;
        divTexto.append(itemTitle, itemPrecio);
        divTexto.setAttribute('class', 'py-2');
        itemTitle.innerHTML = `${producto.nombre}`;
        itemTitle.setAttribute('class', 'text-center');
        itemPrecio.innerHTML = `${producto.precio}`;

        divAdd.setAttribute('class', 'divBtn');
        addBtn.setAttribute('class', 'btn')
        addBtn.innerHTML = '+';
        addBtn.addEventListener('click', e => {
            for(let i = 0; i < carrito.ids.length; i++){
                if( carrito.ids.includes(i)){
                 carrito.cantidad += 1;
                 
                }
               }
        
        })

        delBtn.setAttribute('class', 'btn btn-danger');
        delBtn.addEventListener('click', e => {
                if(total > 0){
                 carrito.ids.splice(id);
                 e.target.parentNode.remove(); 
                 contador -= 1; 

                 total -= producto.precio;
                
                }

        })
    
        divProducto.append(itemImg, divTexto, divAdd, addBtn, delBtn);
        divCarrito.append(divProducto);
       


});
    const divTotal = document.createElement('div');
    const textoTotal = document.createElement('p');
    divTotal.setAttribute('class', 'totalCarritoDiv');
    textoTotal.setAttribute('class', 'totCarritoTxt')
    textoTotal.innerHTML = `Total: ${total}`;
    divTotal.style.color = 'red';
    divTotal.style.backgroundColor = 'white';
    divTotal.append(textoTotal);
    const a = document.createElement('a');
    a.setAttribute('class', 'p-3')
    a.style.backgroundColor = 'white';
    a.href = '#';
    a.innerHTML = 'X';
    a.addEventListener('click' , e =>{
        document.getElementById('modalCarrito').remove();
    });
    const emptyCart = document.createElement('button');
    divCarrito.append(divTotal);

    divModal.append(divCarrito,  a, emptyCart);
   
    emptyCart.setAttribute('class' ,'vaciar p-4');
    emptyCart.style.backgroundColor = 'white';
    emptyCart.innerHTML = 'VACIAR'
    emptyCart.addEventListener('click', e => {
        divCarrito.innerHTML = ''; 
    });
}









