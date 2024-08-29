class Node {
    constructor (value){
        this.value = value;
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

class BinaryTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);

        if(!this.root){
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while(!isFound){
                if(current.value === value){
                    isFound = true;
                    return null;
                }
                if(current.value > value){
                    if(!current.left){
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if(!current.right){
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    height(node = this.root){
        if(node === null){
            return -1;
        }
        let leftHeight = this.height(node.left);
        let rightHeight = this.height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

//Ejemplo de uso
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert();
tree.insert(12);
tree.insert(18);

console.log("La altura del arbol es:", tree.height()); //La altura del arbol es: 2
