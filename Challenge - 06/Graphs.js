class Person {
    constructor(nombre, edad, ciudad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
    }
}

class City {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Graph {
    constructor() {
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node);
        this.adjList[node.nombre] = [];
    }

    addEdge(node1, node2) {
        this.adjList[node1.nombre].push(node2.nombre);
        this.adjList[node2.nombre].push(node1.nombre);
    }

    printGraph() {
        console.log(this.adjList);
    }

    searchNode(value) {
        if (!this.nodes.length) {
            return;
        }
        return this.nodes.find(item => item.nombre === value);
    }

    printAdjacency(value) {
        if (this.searchNode(value)) {
            console.log(this.adjList[value]);
        } else {
            return;
        }
    }

    printResidents(cityName) {
        const city = this.searchNode(cityName); 
        if(city && city instanceof City){
            const people = this.nodes.filter(node => node instanceof Person && node.ciudad === cityName);
            console.log(`Personas en ${cityName}:`, people.map(person => person.nombre)); 
        } else {
            console.log(`Ciudad ${cityName} no encontrada.`);
        }
    }
}

//Creamos el grafo
const grafo = new Graph();

//Agregamos ciudades
const ciudad1 = new City('Bogota');
const ciudad2 = new City('Medellin');
const ciudad3 = new City('Cali');
grafo.addNode(ciudad1);
grafo.addNode(ciudad2);
grafo.addNode(ciudad3);

//Agregamos personas
const persona1 = new Person('Andres', 25, 'Bogota');
const persona2 = new Person('Karol', 30, 'Medellin');
const persona3 = new Person('Steven', 35, 'Cali');
grafo.addNode(persona1);
grafo.addNode(persona2);
grafo.addNode(persona3);

//Creamos las aristas entre personas y sus ciudades
grafo.addEdge(persona1, ciudad1);
grafo.addEdge(persona2, ciudad2);
grafo.addEdge(persona3, ciudad3);

//Imprimimos el grafo
grafo.printGraph();

//Imprimimos la lista de personas que viven en una ciudad determinada
grafo.printResidents('Bogota');
grafo.printResidents('Medellin');
grafo.printResidents('Cali');