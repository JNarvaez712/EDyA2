import { ref, uploadBytes } from 'firebase/storage';
import { storage } from '../firebase/Config';
import { useState } from 'react';

const UpdateStorageComponent = ({ filePath }) => {
  const [file, setFile] = useState(null);

  const handleUpdate = async () => {
    const storageRef = ref(storage, filePath);
    await uploadBytes(storageRef, file);
    alert('Archivo actualizado');
  };

  return (
    <div className="container">
      <input 
        type="file" 
        onChange={(e) => setFile(e.target.files[0])} 
      />
      <button onClick={handleUpdate}>Actualizar Archivo</button>
    </div>
  );
};

export default UpdateStorageComponent;