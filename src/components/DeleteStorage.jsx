import { ref, deleteObject } from 'firebase/storage';
import { storage } from '../firebase/Config';

const DeleteStorageComponent = ({ filePath }) => {
  const handleDelete = async () => {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    alert('Archivo eliminado');
  };

  return (
    <div className="container">
      <button onClick={handleDelete}>Eliminar Archivo</button>
    </div>
  );
};

export default DeleteStorageComponent;