class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Creamos esta funcion para invertir una lista enlazada
function reverseLinkedList(head){
    let prev = null;
    let current = head;
    while (current !== null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

//Creamos esta funcion para unir dos listas enlazadas ordenadas de mayor a menor en una lista ordenada de menor a mayor
function mergeSortedLists(lista1, lista2){
    //Invertimos las listas para poder unirlas ascendentemente
    lista1 = reverseLinkedList(lista1);
    lista2 = reverseLinkedList(lista2);

    let node = new ListNode(0);
    let current = node;

    //Unimos las dos listas ordenadas en orden ascendente
    while (lista1 !== null && lista2 !== null){
        if (lista1.value < lista2.value){
            current.next = lista1;
            lista1 = lista1.next;
        } else {
            current.next = lista2;
            lista2 = lista2.next;
        }
        current = current.next;
    }

    //Si una lista es mas larga, se añade el resto de los elementos
    if (lista1 !== null){
        current.next = lista1;
    } else {
        current.next = lista2;
    }

    return node.next;

}

//Funcion para crear una lista enlazada a partir de un array
function arrayLinkedList(array) {
    let node = new ListNode(0);
    let current = node;
    for (let num of array){
        current.next = new ListNode(num);
        current = current.next;
    }
    return node.next;
}

//Funcion para imprimir una lista enlazada
function printLinkedList(lista){
    let resultado = [];
    while (lista !== null){
        resultado.push(lista.value);
        lista = lista.next;
    }
    console.log(resultado.join(" -> "));
}

let lista1 = arrayLinkedList([7, 5, 2, 1]); //Lista enlazada: 7 -> 5 -> 2 -> 1
let lista2 = arrayLinkedList([8, 6, 4, 3]); //Lista enlazada: 8 -> 6 -> 4 -> 3

let mergeList = mergeSortedLists(lista1, lista2);
printLinkedList(mergeList); // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 
