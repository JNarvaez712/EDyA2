class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    push(nombre, isbn, autor, editorial) {
        const book = {nombre, isbn, autor, editorial};
        this.stack[this.count] = book;
        this.count++;
        return this.stack;
    }
    pop() {
        if(this.count === 0) return undefined;
        this.count--;
        const book = this.stack[this.count];
        delete this.stack[this.count];
        return book; 
    }
    peek() {
        return this.stack[this.count - 1];
    }

    size() {
        return this.count;
    }

    print() {
        console.log(this.stack);
    }
}

//Creamos una nueva pila de libros y agregamos algunos datos
const stack = new Stack();
console.log(stack.size()); //0
console.log(stack.push('Habitos atomicos', '978-0143127741', 'James Clear', 'Alfaguara'));
console.log(stack.size()); //1
console.log(stack.peek());
console.log(stack.push('Recetas saludable', '978-1234567890', 'Karol Navarro','Alianza'));
console.log(stack.size());//2
console.log(stack.push('El poder del ahora', '78-1577314806', 'Eckhart Tolle', 'New World Library'));
console.log(stack.size());//3
stack.print(); //Imprime todos los libros en la pila
console.log(stack.peek());
console.log(stack.pop());
stack.print(); //Imprime todos los libros en la pila despues de eliminar uno
console.log(stack.size());//2
console.log(stack.peek());
