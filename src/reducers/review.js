const Revewis = (reviews = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_Review":
      return action.payload;
    case "CREATE_Review":
      return [...reviews, action.payload];

    case "UPDATE_Review":
      const newState = [...reviews];
      newState[
        newState.findIndex((product) => product._id === action.payload._id)
      ] = action.payload;
      return newState;
    case "DELETE_Review":
      const id = action.payload;
      const newreviews = reviews.filter((product) => product._id !== id);

      return newreviews;
    default:
      return reviews;
  }
};
export default Revewis;
