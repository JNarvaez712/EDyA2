class Persona {
    constructor(nombreCompleto, fechaNacimiento) {
        this.nombreCompleto = nombreCompleto;
        this.fechaNacimiento = fechaNacimiento;
        this.left = null;
        this.right = null;
    }

    isLeaf(){
        if (this.left == null && this.right == null){
            return true;
        } else {
            return false;
        }
    }
}

class ArbolGenealogico {
    constructor(root) {
        this.root = root;
    }

    insert(parentName, nombreCompleto, fechaNacimiento, isLeft) {
        const parent = this.search(this.root, parentName);
        if(parent){
            const newPerson = new Persona(nombreCompleto, fechaNacimiento);
            if(isLeft){
                parent.left = newPerson;
            } else {
                parent.right = newPerson;
            }
        } else {
            console.log(`No se encontro a ${parentName} en el árbol.`);
        }
    }

    search(node, nombreCompleto){
        if(!node) return null;
        if(node.nombreCompleto === nombreCompleto) return node;
        return this.search(node.left, nombreCompleto) || this.search(node.right, nombreCompleto);
    }

    //Recorrido preOrder (root -> left -> right)
    preOrder(node, resultado = []) {
        if (node) {
            resultado.push(`${node.nombreCompleto} ${node.fechaNacimiento}`);
            this.preOrder(node.left, resultado);
            this.preOrder(node.right, resultado);
        }
        return resultado;
    }
    //Recorrido postOrder (left -> right -> root)
    postOrder(node, resultado = []) {
        if (node) {
            this.postOrder(node.left, resultado);
            this.postOrder(node.right, resultado);
            resultado.push(`${node.nombreCompleto} ${node.fechaNacimiento}`);
        }
        return resultado;
    }
    //Recorrido inOrder (left -> root -> right)
    inOrder(node, resultado = []) {
        if (node) {
            this.inOrder(node.left, resultado);
            resultado.push(`${node.nombreCompleto} ${node.fechaNacimiento}`);
            this.inOrder(node.right, resultado);
        }
        return resultado;
    }

    printRoutes(){
        return {
            preOrder: this.preOrder(this.root),
            postOrder: this.postOrder(this.root),
            inOrder: this.inOrder(this.root)
        }
    }
}


// Creacion del arbol genealógico hasta la tercera pre-generación
const abuelo = new Persona("Jose Lenin", "1945-06-10");
const arbolGenealogico = new ArbolGenealogico(abuelo);

arbolGenealogico.insert("Jose Lenin", "Luis Freddy", "1966-02-17", true);
arbolGenealogico.insert("Luis Freddy","Jonathan Narvaez","2004-07-12", true);

//Imprimir los recorridos
const recorridos = arbolGenealogico.printRoutes();
console.log("Recorrido preOrder:", recorridos.preOrder);
console.log("Recorrido postOrder:", recorridos.postOrder);
console.log("Recorrido inOrder:", recorridos.inOrder);