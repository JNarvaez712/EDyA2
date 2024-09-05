//Se define la clase Todo
class Todo {
    constructor(titulo, descripcion, puntos, prev = null, next = null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntos = puntos;
        this.prev = prev;
        this.next = next;
    }
}

//Se define la clase TodoList
class TodoList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(titulo, descripcion, puntos){
        const newTodo = new Todo(titulo, descripcion, puntos);

        if(!this.head){
            this.head = newTodo;
            this.tail = newTodo;
        } else {
            this.tail.next = newTodo;
            newTodo.prev = this.tail;
            this.tail = newTodo;
        }
    }

    peek(titulo, current = this.head){
        if(this.head === null){
            return false;
        }
        if(current !== null){
            if(current.titulo === titulo){
                return true;
            } else {
                return this.peek(titulo, current.next);
            }
        }
        return false;
    }

    size(current= this.head, acum = 0){
        if(this.head === null){
            return 0;
        }
        if(current !== null){
            acum++;
            return this.size(current.next, acum + 1);
        }
        return acum;
    }

    remove(titulo){
        let current = this.head;

        while(current !== null) {
            if(current.titulo === titulo) {
                if(current.prev !== null){
                    current.prev.next = current.next;
                } else {
                    this.head = current.next;
                }
                if(current.next !== null){
                    current.next.prev = current.prev;
                } else {
                    this.tail = current.prev;
                }
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print(){
        let current = this.head;
        while(current !== null){
            console.log(`Titulo: ${current.titulo}, Descripcion: ${current.descripcion}, Puntos: ${current.puntos}`);
            current = current.next;
        }
    }
}

//Creamos una nueva lista de TODOs y agregamos algunos datos
const todoList = new TodoList();
todoList.append('Tarea 1', 'Investigar sobre biologia', 5);
todoList.append('Tarea 2', 'Investigar sobre python 2', 10);
todoList.append('Tarea 3', 'Investigar sobre react', 15);

//Imprimimos la lista de TODOs
todoList.print();

//Verificamos si una tarea existe
console.log(todoList.peek('Tarea 2'));
console.log(todoList.peek('Tarea 4'));

//Obtenemos el tamaño de la lista
console.log(todoList.size());

//Eliminamos una tarea
todoList.remove('Tarea 2');

//Imprimimos la lista de TODOs
todoList.print();