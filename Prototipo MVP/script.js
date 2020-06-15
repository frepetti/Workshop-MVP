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
        this.pedidos = order;
    }
}

class producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

//Declaracion de Funciones


function menuCompras() {
    let menu1 =  prompt("Por favor seleccione el numero de la opción \n 1. Usuarios \n 2. Productos \n 3. Pedidos \n 4. Salir" ).toLowerCase();
    switch (menu1) {
        case "1":
            function submenu1(){
                let menu2 = prompt ("Por favor seleccione la letra de la opcion \n a. Alta \n b. Listado \n c. Volver al Menu Anterior").toLowerCase();
                function caso1(){
                    switch (menu2) {
                    case "a":
                        const nombre = prompt("Ingrese su nombre");
                        const apellido = prompt("Ingrese su apellido");
                        const email = prompt("Ingrese su email");
                        const tel = prompt("Ingrese su telefono");
                        
                        const user = new usuario(nombre, apellido, email, tel, pedidos);
                        usuarios.push(user);
                        submenu1();
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
                        submenu1();
                    break
                    }
                }
                caso1(menu2);
            }
            submenu1();
        break;
        case "2":
            function submenu2(){
                let menu2 = prompt ("Por favor seleccione la letra de la opcion \n a. Alta \n b. Listado \n c. Volver al Menu Anterior").toLowerCase();
                function caso2(){
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
                        submenu2();
                    break
                    }
                }
                caso2(menu2);
            }
            submenu2();
        break;

        case "3":
            alert("opcion3")
            let menu3 = prompt ("Por favor seleccione la letra de la opcion \n a. Seleccionar usuario \n b. Seleccionar productos \n c. Confirmar compra \n d. Listar pedidos").toLowerCase();
            switch(menu3) {
                case "a":
                    function listarUsuarios() {
                        let userList = [];
                        for (let i = 0; i < usuarios.length; i++) {
                        let userList2 = (i+1 + '. ' + usuarios[i][0] + ' ' + usuarios[i][1]);
                        userList.push(userList2);
                        }
                        return userList;
                    }
                    console.log ("Por favor seleccione un usuario\n" + listarUsuarios());
                break;
            }
        break;

        case "4":
            salir = true;
        break
        default:
            alert("Vuelva a intentarlo");
            menuCompras();
    }
}

while (salir == false) {
    menuCompras();
}
menuCompras();
