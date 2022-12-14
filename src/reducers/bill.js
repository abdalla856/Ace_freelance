




const Bills = (bills = [], action) => {
    switch (action.type) {
      case "FETCH_ALL_BILLS":
        return action.payload;
      case "CREATE":
        return [...bills, action.payload];
      case "Blog_By_ID":
        return action.payload;
  
      case "UPDATE_Bill":
       const newState =[...bills]
       newState[
        newState.findIndex((bill)=>bill._id===action.payload._id)
        ] = action.payload;
        return newState
      case "DELETE_BILL":
        const id = action.payload;
        console.log(id)
        bills = bills.filter((bill) => bill._id !== id);
        console.log(bills);
        return bills;
      default:
        return bills;
    }
  };
  export default Bills;
  