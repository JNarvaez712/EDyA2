import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteImage } from '../redux/authActions';
import { getStorage, ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/Config';

const DeleteImage = () => {
  const [imagePath, setImagePath] = useState('');
  const dispatch = useDispatch();

  const handleDelete = async () => {
    const imageRef = ref(storage, imagePath);
    try {
      await deleteObject(imageRef);
      dispatch(deleteImage(imagePath));
      alert('Imagen eliminada exitosamente');
    } catch (error) {
      console.error('Error al eliminar la imagen:', error);
      alert('Error al eliminar la imagen');
    }
  };

  return (
    <div>
      <h2>Eliminar Imagen</h2>
      <input
        type="text"
        value={imagePath}
        onChange={(e) => setImagePath(e.target.value)}
        placeholder="Ruta de la imagen"
      />
      <button onClick={handleDelete}>Eliminar Imagen</button>
    </div>
  );
};

export default DeleteImage;