const productos = [
    {nombre: "wide leg vainilla", precio: 5000},
    {nombre: "chaleco engomado", precio: 4000},
    {nombre: "denim brat", precio: 4500},
    {nombre: "conjunto lino", precio: 7500},
    {nombre: "campera valencia", precio: 2000},
    {nombre: "denim cher", precio: 5000},
];

let carrito = []

let seleccion = prompt("Hola! Desea comprar algun producto?")

while (seleccion != "si" && seleccion!= "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("Hola! Desea comprar algo? Si o no")
}

if(seleccion=="si"){
    alert("A continuacion le mostramos nuestra lista de productos")
    let todoslosProductos = productos.map ((productos => productos.nombre + "" + productos.precio + "$"));
    alert (todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("¡Gracias por visitar nuestra tienda, hasta pronto!")
}

while (seleccion != "no"){
    let productos = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(productos == "wide leg vainilla" || 
    productos== "chaleco engomado" || 
    productos=="denim brat" || 
    productos=="conjunto lino" || 
    productos=="campera valencia" || 
    productos=="denim cher"){
        switch(productos){
            case "wide leg vainilla":
                precio= 5000;
                break;
            case "chaleco engomado":
                precio= 4000;
                break;
            case "denim brat":
                precio= 4500;
                break;
            case "conjunto lino":
                precio= 7500;
                break;
            case "campera valencia":
                precio= 2000;
                break;
            case "denim cher":
                precio= 5000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuanta cantidad quiere llevar?"))

    carrito.push({productos, unidades, precio})
    console.log(carrito)
    } else {
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion=="no"){
        alert("Gracias por su compra!")
        carrito.forEach((carritoFinal)=> {
            console.log(`productos: 
            ${carritoFinal.productos}, 
            unidades: ${carrito.unidades},
            total a pagar por productos ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce ((ecc, el) => acc + el.precio * el.unidades, 0)
console.log(`Total a pagar por su pedido: ${total}`)
