let usuarios = [];
let productos = [];
let pedidos = [];
let salir = false;

//Declaracion de Clases
class usuario {
    constructor(nombre, apellido, email, tel, order){
        this.name = nombre;
        this.lastName = apellido;
        this.mail = email;
        this.tel = tel;
        this.pedido = order;
    }
}

class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


function menuCompras() {
    let menu1 =  prompt("Por favor seleccione el numero de la opción \n 1. Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir" ).toLowerCase();
    switch (menu1) {
        case "1":
            menuUsuarios();
        break;
        case "2":
            menuProductos();
        break;
        case "3":
            let userSelect;
            menuPedidos();
        break;

        case "4":
            salir = true;
            alert("Gracias, vuelva prontos!")
        break
        default:
            alert("Vuelva a intentarlo");
            menuCompras();
    }
}

//Declaracion de Funciones


//Funcion para procesar las acciones del submenu Usuarios
function caso1(menu2){
    switch (menu2) {
    case "a":
        const nombre = prompt("Ingrese su nombre");
        const apellido = prompt("Ingrese su apellido");
        const email = prompt("Ingrese su email");
        const tel = prompt("Ingrese su telefono");
        const pedido = pedidos;
        const user = new usuario(nombre, apellido, email, tel, pedido);
        usuarios.push(user);
        menuUsuarios();
    break;
    case "b":
        for (i=0; i < usuarios.length; i++) {
            console.log(usuarios[i])
        }
    break;
    case "c":
        menuCompras();
    break;
    default:
        alert("vuelva a intentarlo");
        menuUsuarios();
    break
    }
}

//Funcion para seleccionar las opciones del menu Usuario:
function menuUsuarios(){
    let menu2 = prompt ("Por favor seleccione la letra de la opcion \n a. Alta \n b. Listado \n c. Volver al Menu Anterior").toLowerCase();
    caso1(menu2);
}

//Funcion para procesar las opciones del submenu Productos:
function caso2(menu2){
    switch (menu2) {
    case "a":
        const nombre = prompt("Ingrese su nombre");
        const precio = prompt("ingrese el precio del producto")
        
        const product = new producto(nombre, precio);
        productos.push(product);
    break;
    case "b":
        for (i=0; i < productos.length; i++) {
            console.log(productos[i])
        }
    break;
    case "c":
        menuCompras();
    break;
    default:
        alert("vuelva a intentarlo");
        menuProductos();
    break
    }
}

//Funcion para seleccionar las opciones del submenu Producto:
function menuProductos(){
    let menu2 = prompt ("Por favor seleccione la letra de la opcion \n a. Alta \n b. Listado \n c. Volver al Menu Anterior").toLowerCase();
    caso2(menu2);
}

//Funcion para procesar las opciones del submenu Pedidos:
function caso3 (menu3) {
    switch(menu3) {
        case "a":
            selectUser();
            selectProduct();
            menuPedidos();
        break;
        case "b":
            selectProduct();
            selectUser();
            menuPedidos();
        break;
        case "c":
            confirmarPedido();
            menuPedidos();
        break;
        case "d":
            listarPedidos();
            menuPedidos();
        break;
        default:
            alert("Ingrese un valor valido");
            menuPedidos();
    }
}

//Funcion para seleccionar las opciones del submenu Pedidos
function menuPedidos(){
    let menu3 = prompt ("Por favor seleccione la letra de la opcion \n a. Seleccionar usuario \n b. Seleccionar productos \n c. Confirmar compra \n d. Listar pedidos").toLowerCase();
    caso3(menu3);
}

//Funcion para seleccionar usuario:
function selectUser(){
    let userList = [];
    function listarUsuarios() {
        for (let i = 0; i < usuarios.length; i++) {
        let userList2 = (i+1 + '. ' + usuarios[i][0] + ' ' + usuarios[i][1]);
        userList.push(userList2);
        }
        return userList;
    }
    userSelect = prompt("Por favor seleccione un numero de usuario\n" + listarUsuarios());
    return userSelect;
}

//Funcion para seleccionar productos:
function selectProduct(){

}

//Funcion para confirmar Pedido:
function confirmarPedido(){
    
}

//Loop de salida
while (salir == false) {
    menuCompras();
}