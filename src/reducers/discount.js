const Discounts = (discounts = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_Discount":
        return action.payload;
      case "CREATE_Discount":
        return [...discounts, action.payload];
  
      case "UPDATE_Discount":
        const newState = [...discounts]
        newState[
          newState.findIndex((discount) => discount.id === action.payload.id)
        ] = action.payload;

        return newState ;
      case "DELETE_Discount":
        const id = action.payload;
        const newreviews = discounts.filter((discount) => discount.id !== id);
  
        return newreviews;
      default:
        return discounts;
    }
  };
  export default Discounts;
  