
let productos = [["queso",10],["harina",80],["jamon",50],["tomate",20]]
let pedido1 = []
function selectProduct(){
    let productList = [];
    let back = false;
    let pedido = [];
    while (back === false) {
        console.clear();
        function listarProductos() {
            for (let i = 0; i < productos.length; i++) {
                arrayProducto = Object.values(productos[i])
                let productList2 = (i+1 + '. ' + arrayProducto[0] + ' ' + arrayProducto[1]);
                productList.push(productList2);
            }
            return productList;
        }
        console.log(listarProductos());
        productList = [];
        let productSelect = prompt("Por favor seleccione un numero de un producto o escriba Atras para volver al menu anterior").toLowerCase();
        if (productSelect == "atras"){
            back =   true;
            return back
        } else {
            pedido.push(productos[productSelect-1][0]);
        }
    }
    pedido1 = pedido;
    return pedido1
}
selectProduct();
