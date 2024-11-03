export const deleteImage = (imagePath) => {
  return {
    type: 'DELETE_IMAGE',
    payload: imagePath,
  };
};