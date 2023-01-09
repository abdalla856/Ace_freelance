const Orders = (orders = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_ORDER":
        return action.payload;
      case "CREATE_ORDER":
        return [...orders, action.payload];
      case "ORDER_By_ID":
        return action.payload;
  
      case "UPDATE_ORDER":
        const newState = [...orders];
        newState[newState.findIndex((order) => order._id === action.payload._id)] =
          action.payload;
        return newState;
      case "DELETE_ORDER":
        const id = action.payload;
        orders = orders.filter((order) => order._id !== id);
   
        return orders;
      default:
        return orders;
    }
  };
  export default Orders;
  