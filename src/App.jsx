import React from "react";
import { MultipleCustomHooks } from "./components/MultipleCustomHooks";
import { TodoApp } from "./components/TodoApp";

const App = () => {
    return (
        <div>
          <h1>Aplicación de Pokemón y TODOs</h1>
          <hr />
          <div className="row">
            <div className="col-6">
              <MultipleCustomHooks />
            </div>
            <div className="col-6">
              <TodoApp />
            </div>
          </div>
        </div> 
    )
}

export default App;
