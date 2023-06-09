const initialState = {
  favourites: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      };

    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(fav => fav !== action.payload)
        }
      };
    //qui vado ad aggiungere i miei casi (case "ESEMPIO":) col return {...state,
    // favourites: {
    //    ...state.favourites,
    // content: [...state.favourites.content, action,payload]
    // }};
    default:
      return state;
  }
};

export default mainReducer;
