import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/Config';

const DeleteComponent = ({ id }) => {
  const handleDelete = async () => {
    const docRef = doc(db, 'coleccion', id);
    await deleteDoc(docRef);
    alert('Documento eliminado');
  };

  return (
    <div className="container">
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default DeleteComponent;