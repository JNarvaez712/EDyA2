class Person {
    constructor(nombre, horaDeLlegada) {
        this.nombre = nombre;
        this.horaDeLlegada = horaDeLlegada;
    }
}

class Queue {
    constructor() {
        this.queue = [];	
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }
    dequeue() {
        return this.queue.shift();
    }
    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        console.log(this.queue);
    }
}

const queue = new Queue();
console.log(queue.enqueue(new Person('Andres', '09:00 AM')));
console.log(queue.enqueue(new Person('Karol', '09:30 AM')));
console.log(queue.enqueue(new Person('Steven', '10:00 AM')));

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.isEmpty());
queue.print();