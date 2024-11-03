import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import UpdateComponent from './components/Update';
import DeleteComponent from './components/Delete';
import UpdateStorageComponent from './components/UpdateStorage';
import DeleteStorageComponent from './components/DeleteStorage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="navigation">
        <nav>
          <ul>
            <li><Link to="/update">Actualizar Documento</Link></li>
            <li><Link to="/delete">Eliminar Documento</Link></li>
            <li><Link to="/update-storage">Actualizar Archivo</Link></li>
            <li><Link to="/delete-storage">Eliminar Archivo</Link></li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/update" />} />
        <Route path="/update" element={<UpdateComponent id="documentoId" />} />
        <Route path="/delete" element={<DeleteComponent id="documentoId" />} />
        <Route path="/update-storage" element={<UpdateStorageComponent filePath="ruta/al/archivo" />} />
        <Route path="/delete-storage" element={<DeleteStorageComponent filePath="ruta/al/archivo" />} />
      </Routes>
    </Router>
  );
};

export default App;
