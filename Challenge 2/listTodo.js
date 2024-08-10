//Se define la clase Todo
class Todo {
    constructor(titulo, descripcion, puntos){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.puntos = puntos;
    }
}
//Se define la clase TodoList
class TodoList{
    constructor(){
        this.todos = [];
    }
    //Metodo para agregar un nuevo Todo
    addTodo(titulo, descripcion, puntos){
        const todo = new Todo(titulo, descripcion, puntos);
        this.todos.push(todo);
    }
    //Metodo para imprimir la lista de Todos
    printTodos(){
        this.todos.forEach((todo, index)=>{
            console.log(`Todo ${index+1}:`);
            console.log(`Titulo: ${todo.titulo}`);
            console.log(`Descripcion: ${todo.descripcion}`);
            console.log(`Puntos: ${todo.puntos}`);
            console.log('-------------------');
        });

    }
}
//Se crea una instancia de la clase TodoList Y se agregan 3 Todos
const todoList = new TodoList();
todoList.addTodo('Estudiar JS', 'Estudiar JS en el curso de Udemy', 10);
todoList.addTodo('Estudiar React', 'Estudiar React en el curso de Udemy', 20);
todoList.addTodo('Estudiar Node', 'Estudiar Node en el curso de Udemy', 30);

//Se imprime la lista de Todos
todoList.printTodos();