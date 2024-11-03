const initialState = {
  images: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter(image => image.path !== action.payload),
      };
    default:
      return state;
  }
};

export default authReducer;