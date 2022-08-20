export const addToFavorite = (product) => {
  return {
    type: "ADD_TO_FAVORITE",
    payload: product,
  };
};

export const removeFromFavorite = (product) => {
  return {
    type: "REMOVE_FROM_FAVORITE",
    payload: product,
  };
};
