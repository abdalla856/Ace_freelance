const Products = (products = [], action) => {
  switch (action.type) {
    case "FETCH_ALL_Product":
      return action.payload;
    case "CREATE_Product":
      return [...products, action.payload];
    case "Product_By_ID":
      return action.payload;

    case "UPDATE_Product":
      const newState = [...products];
      newState[newState.findIndex((product) => product._id === action.payload._id)] =
        action.payload;
      return newState;
    case "DELETE_Product":
      const id = action.payload;
      const newproducts = products.filter((product) => product._id !== id);
      
      return  newproducts;
    default:
      return products;
  }
};
export default Products;
