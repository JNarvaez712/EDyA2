import { doc, setDoc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/Config';
import { useState } from 'react';

const UpdateComponent = ({ id }) => {
  const [newData, setNewData] = useState('');

  const handleUpdate = async () => {
    const docRef = doc(db, 'coleccion', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, { campo: newData });
      alert('Documento actualizado');
    } else {
      await setDoc(docRef, { campo: newData });
      alert('Documento creado y actualizado');
    }
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={newData} 
        onChange={(e) => setNewData(e.target.value)} 
        placeholder="Nuevo valor" 
      />
      <button onClick={handleUpdate}>Actualizar</button>
    </div>
  );
};

export default UpdateComponent;